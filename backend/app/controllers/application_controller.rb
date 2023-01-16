require 'pry'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/beerlist" do
    @beers = Beer.all.order(:names)
    @beers.to_json
  end

  # get `/beerlist/${id}` do 
  #   @beer = Beer.find(id)
  #   @beer.to_json
  # end
  
  delete "/beerlist/:id" do
    @beer= Beer.find(params[:id])
    @beer.destroy
    @beer.to_json
    # @beer = Beer.find(id)
    # @beer.to_json
  end
  

  post "/addbeer" do
    @beer = Beer.new(params)
      @beer.save
      @beer.to_json
  end

  get "/cart" do
    @carts = Cart.all
    @carts.to_json
     
    
  end

end
  