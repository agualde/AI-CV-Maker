class OpenAiService
  attr_accessor :message, :key
  include OpenAiConstants

  DICTIONARY = {
    about: ABOUT_SECTION_PROMPT,
    role: ROLE_PROMPT
  }

  def initialize(key, message)
    @key = key.to_sym
    @message = message
  end

  def call
    response = OpenAi.complete("#{DICTIONARY[key]} #{message}")
    JSON.parse(response)['new_text']
  rescue
    message
  end
end