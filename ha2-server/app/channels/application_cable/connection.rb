module ApplicationCable
  class Connection < ActionCable::Connection::Base

    def connect
  		logger.debug ' Connection < ActionCable::Connection::Base connect '
  	end


  end
end
