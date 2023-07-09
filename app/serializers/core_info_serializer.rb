# frozen_string_literal: true

class CoreInfoSerializer < ActiveModel::Serializer
  include OpenAiConstants

  attributes :id,
             :name,
             :location,
             :email,
             :title, 
             :avatar, 
             :about,
             :last_name

  has_many :experiences

  has_many :educations


  def email
    "#{object.name&.downcase}#{object.last_name&.downcase }@gmail.com"
  end

  def name
    object.name&.capitalize
  end

  def last_name
    object.last_name&.capitalize
  end

  def location 
    object.country
  end

  def avatar
    object.image_url || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  end

  def about
    object.about_text
  end
end
