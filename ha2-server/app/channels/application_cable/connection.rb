module ApplicationCable
  class Connection < ActionCable::Connection::Base

    identified_by :current_user

    def connect
      self.current_user = find_user

#      ActionCable.server.connections.length

    end

    private

    def find_user

      u = User.find(cookies.signed[:user_id])

      logger.debug '------------'+ u.name

      u
    end

  end
end
