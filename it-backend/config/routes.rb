Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "/users", to: "users#index"
      get "/get_current_user", to: "sessions#get_current_user"
      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"
      resources :job_applications
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
