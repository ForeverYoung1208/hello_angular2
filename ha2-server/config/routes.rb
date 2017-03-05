Rails.application.routes.draw do

	mount ActionCable.server => '/cable'

#	mount ActionCable.server, at: '/ws'

  resources :todos


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
