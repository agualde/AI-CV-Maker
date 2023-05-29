# frozen_string_literal: true

class AuthorSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :country,
             :email

  def email
    "#{object.name.downcase.gsub(' ', '')}@gmail.com"
  end
end
