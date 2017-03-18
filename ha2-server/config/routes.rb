Rails.application.routes.draw do

	mount ActionCable.server => '/cable'

#	mount ActionCable.server, at: '/ws'

  resources :todos

  get '/subscribe_to_ws', to: 'todos#subscribe_to_ws', as: 'subscribe_to_ws'




  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
