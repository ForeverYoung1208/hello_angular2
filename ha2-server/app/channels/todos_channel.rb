class TodosChannel < ApplicationCable::Channel


	def subscribed
		stream_from 'todos'
	end

	def index

		ActionCable.server.broadcast 'todos', { todos: Todo.all.to_json  }

	end

	def create( data )

  	logger.debug '!!!!!!!!!!!!!!!!!!!! 	def create( data ) '+ data.to_s

		# Todo.create( 
		# 	caption: data['caption'],
		# 	duration: data['duration'],
		# 	isdone: data['isdone']
		# )
		# ActionCable.server.broadcast 'todos', { todos: Todo.serialize_all( Todo.all ) }

	end

	def update( data )
  	logger.debug '!!!!!!!!!!!!!!!!!!!! 	def update( data ) '+ data.to_s
	end

  def receive( data )

  	logger.debug ' !!!!!!!!!!!!!!!!!! def receive(data )'



    # todo = Todo.create()
    # ActionCable.server.broadcast('messages', {message: message.content, chatroom_id: message.chatroom_id})
  end

  def unsubscribed
  end

end

