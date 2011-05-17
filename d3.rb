require 'rubygems'
require 'sinatra'


get '/' do
  @title = "d3.js exercise BEGIN!"
  erb :index
end

get '/bargraph' do
  erb :bargraph
end


