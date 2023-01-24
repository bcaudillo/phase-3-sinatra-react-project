require 'pry'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/beerlist" do
    @beers = Beer.all.order(:names)
    @beers.to_json
  end


  patch "/cart/:id" do 
    @cart = Cart.find(params[:id])
    @cart.update(params)
    @cart.to_json(include: :beer)
  end

  delete "/cart" do
    @cart = Cart.destroy_all
  end




  delete "/cart/:id" do
    @cart= Cart.find(params[:id])
    @cart.destroy
    @cart.to_json
  end
  
  delete "/beerlist/:id" do
    @beer = Beer.find(params[:id])
    @beer.destroy
    @beer.to_json
  end

  post "/cart" do 
    @carts = Cart.new(params)
    @carts.save
    @carts.to_json(include: :beer)
  end
  
  
  post "/addbeer" do
    @beer = Beer.new(params)
    @beer.save
    @beer.to_json
  end

  get "/cart" do
    @carts = Cart.all
    @carts.to_json(include: :beer)

     
  end

end
  