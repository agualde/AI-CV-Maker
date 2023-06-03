# frozen_string_literal: true

class CoreInfoSerializer < ActiveModel::Serializer
  include OpenAiConstants

  attributes :id,
             :name,
             :location,
             :email,
             :title, 
             :avatar, 
             :about

  has_many :experiences

  has_many :educations


  def email
    "#{object.name&.downcase&.gsub(' ', '')}@gmail.com"
  end

  def name
    "#{object.name&.capitalize} #{object.last_name&.capitalize}"
  end

  def location 
    object.country
  end

  def avatar
    "https://avatars.githubusercontent.com/u/94261580?s=400&u=0c852c05d3714e89f22dd0544f8a296d7f1a9e96&v=4"
  end

  def about
    object.about_text
  end
end
