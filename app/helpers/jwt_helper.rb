module JwtHelper
  def self.encrypt(data)
    payload = {
      data: data,
      exp: Time.now.to_i + 3600 # Expires in 1 hour
    }
    secret = ENV['JWT_SECRET']
    token = JWT.encode payload, secret, 'HS256'
    token
  end

  def self.decrypt(token)
    secret = ENV['JWT_SECRET']
    begin
      decoded_token = JWT.decode token, secret, true, { algorithm: 'HS256' }
      decoded_token[0]['data']
    rescue JWT::ExpiredSignature
      # Handle expired token, e.g. by throwing a custom exception
      raise CustomError::ExpiredToken
    rescue JWT::DecodeError
      # Handle invalid token, e.g. by throwing a custom exception
      raise CustomError::InvalidToken
    end
  end
end