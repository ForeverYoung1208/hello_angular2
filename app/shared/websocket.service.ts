import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
import { WebSocketSubject } from "rxjs/observable/dom/WebSocketSubject"

@Injectable()
export class WebSocketService {
  private ws: WebSocketSubject<Object>;
  private socket: Subscription;
  private url:string = 'http://192.168.0.128:3000';
//  apiUrl:string = 'http://192.168.99.51:3000';

  public message: Subject<Object> = new Subject();
  public opened: Subject<boolean> = new Subject();

  public close():void{
    this.socket.unsubscribe();
    this.ws.complete();
  }

  public sendMessage( message:string ):void{
    this.ws.next( message );
  }


  public start( url: string ):void{
    let self = this;
    this.url = url;
    this.ws = Observable.webSocket( this.url );

    this.socket = this.ws.subscribe( {
      next: ( data:MessageEvent ) => {
        if( data[ 'type' ] == 'welcome' ){
          self.opened.next( true );
        }
        this.message.next( data );
      },
      error: () => {

        self.opened.next( false );
        this.message.next( { type: 'closed' } );
        self.socket.unsubscribe();
        setTimeout( () => {
          self.start( self.url );
        }, 1000 );

      },
      complete: () => {
        this.message.next( { type: 'closed' } );
      }
        
    } );


  }
}



@Injectable()
export class ChannelWebsocketService {
  private socketStarted: boolean;
  public observableData: Subject<Object> = new Subject();
  public identifier:Object = {};
  public identifierStr: string;
  public subscribed: Subject<boolean> = new Subject();

  constructor( private websocketService: WebSocketService ){
    this.observeOpened();
    this.observeMessage();
  }

  private static encodeIdentifier( identifier:string ):Object{
    return JSON.parse( identifier );
  }

  private static getDataString( parameters:Object ):string{
    let first = true,
      result = '';

    for ( let key in parameters ){
      if( first ){
        first = false;
        result +=  `\"${ key }\":\"${ parameters[ key ] }\"`;
      } else {
        result += `, \"${ key }\":\"${ parameters[ key ] }\"`;
      }
    }
    return `{ ${ result } }`;
  }

  private getSubscribeString():string{
    this.identifierStr = ChannelWebsocketService.getDataString( this.identifier );
    return JSON.stringify( {
      command: 'subscribe',
      identifier: this.identifierStr
    } );

  };

  private isThisChannel( data:Object ):boolean {
    if( data[ 'identifier' ] ){
      let identifier = ChannelWebsocketService.encodeIdentifier( data[ 'identifier' ] );
      if ( JSON.stringify( identifier ) === JSON.stringify( this.identifier ) ){
        return true;
      }
    }
    return false;
  }

  private observeMessage(){
    let self = this;

    this.websocketService.message.subscribe( ( data: Object ) => {
      if( self.isThisChannel( data ) ){
        if( data[ 'type' ] && data[ 'type' ] == 'confirm_subscription' ){
          this.subscribed.next( true );
        } else if ( data[ 'message' ] ){
          this.observableData.next( data[ 'message' ] );
        }
      }
    } );

  }

  private observeOpened(){
    let self = this;
    this.websocketService.opened.subscribe( ( data: boolean ) => {
      self.socketStarted = data;
      if( data ){
          self.subscribe();
      }
    } );
  }
    
  private subscribe(){
    this.websocketService.sendMessage( this.getSubscribeString() );
  }
    

  public send( data: Object ){

    this.websocketService.sendMessage( JSON.stringify( {
      command:'message',
      identifier: this.identifierStr,
      data: ChannelWebsocketService.getDataString( data )
    } ) );

  }

  public unsubscribe(){

    this.websocketService.sendMessage( JSON.stringify( {
      command: 'unsubscribe',
      identifier: this.identifierStr } ) );
    this.subscribed.next( false );

  }

}

