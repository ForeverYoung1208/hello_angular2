module ApplicationCable
  class Connection < ActionCable::Connection::Base

    identified_by :current_user

    def connect
      self.current_user = find_user

#      ActionCable.server.connections.length

    end

    private

    def find_user
      cookies.signed[:user_name]

#      debugger
    end

  end
end
