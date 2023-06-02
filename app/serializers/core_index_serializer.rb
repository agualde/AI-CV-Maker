# frozen_string_literal: true

class CoreIndexSerializer < ActiveModel::Serializer
  attributes :id,
             :title

  def email
    "#{object.name&.downcase&.gsub(' ', '')}@gmail.com"
  end

  def name
    object.name&.capitalize
  end

  # def title
  #   return unless object.about_text.present? && object.title.present?

  #   message = "#{object.about_text}. Let's do a constraint. use 1-4 words for my title, and try to not repeat my current title: #{object.title}"
  #   OpenAiService.new(MARKETING_CONSULTANT_ROLE_PROMPT, message).call
  # end

  def location 
    object.country
  end

  def avatar
    "https://avatars.githubusercontent.com/u/94261580?s=400&u=0c852c05d3714e89f22dd0544f8a296d7f1a9e96&v=4"
  end

  def about
    object.about_text
    # return unless object.about_text.present?

    # message = object.about_text
    # OpenAiService.new(MARKETING_CONSULTANT_PROMPT, message).call
  end
end