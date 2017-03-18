class TodosChannel < ApplicationCable::Channel

	def subscribed
		stream_from "todos"
	end

	def index
  	logger.debug '!!!!!!!!!!!!!!!!!!!! 	def index'
	end

	def create( data )
  	logger.debug '!!!!!!!!!!!!!!!!!!!! 	def create( data ) '+ data.to_s
	end

	def update( data )
  	logger.debug '!!!!!!!!!!!!!!!!!!!! 	def update( data ) '+ data.to_s
	end

  def receive( data )
  	logger.debug ' !!!!!!!!!!!!!!!!!! def receive(data )'
  end

  def unsubscribed
  end

end

