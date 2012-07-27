require 'rack-flash'
require "pry"
class D3Example < Sinatra::Base
  enable :sessions
  use Rack::Flash, :sweep => true,
                   :accessorize => [:notice, :warning, :error]
  before do
    @graphs = %w(bargraph bargraph2 bouncybawls population ball)
  end

  error 400..510 do
    flash[:warning] = "Sorry, that page either doesn't exist or is unavailable"
    redirect "/bargraph"
  end

  get '/' do
    redirect '/bargraph'
  end

  get '/bargraph' do
    erb :bargraph
  end

  get '/bargraph2' do 
    erb :bargraph2
  end

  get '/bouncybawls' do
    erb :bouncybawls
  end

  get '/population' do
    erb :population
  end

  get "/ball" do
    erb :ball
  end

end
