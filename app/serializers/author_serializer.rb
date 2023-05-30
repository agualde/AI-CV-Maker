# frozen_string_literal: true

class AuthorSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :location,
             :email,
             :title, 
             :avatar, 
             :about

  def email
    "#{object.name.downcase.gsub(' ', '')}@gmail.com"
  end

  def name
    object.name.capitalize
  end

  def title
    'Software Engineer'
  end

  def location 
    object.country
  end

  def avatar
    "https://avatars.githubusercontent.com/u/94261580?s=400&u=0c852c05d3714e89f22dd0544f8a296d7f1a9e96&v=4"
  end

  def about
    "Experienced Software Engineer with a demonstrated history of working in the computer software industry. Skilled in Ruby on Rails, React.js, and other programming languages."
  end
end
