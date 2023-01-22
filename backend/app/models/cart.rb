class Cart < ActiveRecord::Base
    belongs_to :beer
end

#cart is more like cart item