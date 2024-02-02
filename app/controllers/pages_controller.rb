class PagesController < ApplicationController
  # GET /index
  def index
    # This action might render a landing page or dashboard, as per your application's design
  end

  # GET /clients
  def clients
    @clients = Client.all

    respond_to do |format|
      format.html # renders clients.html.erb
      format.json # renders clients.json.jbuilder in the pages directory
    end
  end

  # GET /orders
  def orders
    @orders = Order.all

    respond_to do |format|
      format.html # renders orders.html.erb
      format.json # renders orders.json.jbuilder in the pages directory
    end
  end
end
