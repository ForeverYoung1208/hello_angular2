class TodosChannel < ActionCable::Channel
	def subscribed
		stream_from 'todos'
	end

	def index
		ActionCable.server.broadcast 'todos', { todos: Todo.serialize_all( Todo.all ) }
	end

	def create( data )
		Todo.create( 
			caption: data['caption'],
			duration: data['duration']
			isdone: data['isdone']
		)
		ActionCable.server.broadcast 'todos', { todos: Todo.serialize_all( Todo.all ) }

	end

  def unsubscribed
  end

end

