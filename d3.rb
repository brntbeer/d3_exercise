require 'rubygems'
require 'sinatra'


get '/' do
  @title = "d3.js exercise BEGIN!"
  erb :index
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

get "/bar" do
  erb :bar
end

get "/ball" do
  erb :ball
end
