require 'pry'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/beerlist" do
    @beers = Beer.all.order(:names)
    @beers.to_json
  end

  patch "/beerlist/:id" do
    params
    binding.pry
    @beer = Beer.find(params[:id])
    binding.pry
    @beer.update(params)
    binding.pry
    @beer.to_json
  end

  delete "/cart/:id" do
    @cart= Cart.find(params[:id])
    # binding.pry
    @cart.destroy
    @cart.to_json
    # @beer = Beer.find(id)
    # @beer.to_json
  end
  
  delete "/beerlist/:id" do
    @beer = Beer.find(params[:id])
    @beer.destroy
    @beer.to_json
  end

  post "/cart" do 
    # @cart3 = Cart.find_by_or_create_by(params)
    # @cart3 = Cart.find(params[:id])
    # if !@cart3
    #   @carts = Cart.new(params)
    # else
    # @quantity = self.quantity ++
    # @cart3.update(quantity: @quantity)

    @carts = Cart.new(params)
    @carts.save
    @carts.to_json
  end
  
  
  post "/addbeer" do
    @beer = Beer.new(params)
    @beer.save
    @beer.to_json
  end

  get "/cart" do
    @carts = Cart.all
    @cart = Cart.select(:item_name).group(:item_name).having("count(*) > 1").size
    @cart1 = Cart.group(:item_name)
    if !@carts
      "Cart empty"
    else
      @carts.to_json
    end
    # binding.pry
    # binding.pry
    # @cart.map do |item|
    #   item << @carts
    # end


    # @cart1.to_json
     
  end

end
  