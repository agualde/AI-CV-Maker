class CoreInfosIndexSerializer < ActiveModel::Serializer
  attributes :id, :email, :title

  def id
    JwtHelper.encrypt(object.id)
  end

  def email
    "#{object.name&.downcase&.gsub(' ', '')}@gmail.com"
  end
end
