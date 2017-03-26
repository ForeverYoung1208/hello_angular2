class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :update, :destroy]

  # GET /todos
  def index
    @todos = Todo.all

    render json: @todos


  end

  # GET /todos/1
  def show
    render json: @todo
  end

  # POST /todos
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      ActionCable.server.broadcast 'todos',
        todos: [@todo],
        action: 'show'


      render json: @todo, status: :created, location: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end


  end

  # PATCH/PUT /todos/1
  def update
    if @todo.update(todo_params)
      ActionCable.server.broadcast 'todos',
        todos: [@todo],
        action: 'update'      
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  def destroy
    @todo.destroy
    ActionCable.server.broadcast 'todos',
      todos: [@todo],
      action: 'remove'
  end

  def subscribe_to_ws

    cookies[:user_name] = {
      value: params[:channelUser],
#      expires: 1.year.from_now,
      domain: :all
    }

    # if cookies.signed[:user_name] = params[:channelUser]

    #   head :ok
    # else
    #   head :unprocessable_entity
    # end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def todo_params
      params.require(:todo).permit(:caption, :isDone, :duration)
    end
end
