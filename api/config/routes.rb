Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace 'api' do
    namespace 'v1' do
      post '/login', to: 'sessions#create'
      delete '/logout', to: 'sessions#delete'

      get '/current_user', to: 'current_user#show'
    end
  end
end
