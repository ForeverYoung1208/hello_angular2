export class MyConfig{
	static apiProtocolWS:string = 'ws:';
	static apiAddress:string = '//192.168.0.128:3000';
//	static apiAddress:string = '//192.168.99.51:3000';
//  static apiAddress:string = '//192.168.0.240:3000';
	static cableSuffix:string = '/cable'
	static cableAddress:string = MyConfig.apiProtocolWS + MyConfig.apiAddress + MyConfig.cableSuffix
	static apiUrl:string = 'http:'+ MyConfig.apiAddress;
  static channel = 'TodosChannel'  

}
