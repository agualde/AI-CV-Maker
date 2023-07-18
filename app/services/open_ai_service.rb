class OpenAiService
  attr_accessor :message, :key
  include OpenAi::Instance
  include OpenAi::Prompts

  DICTIONARY = {
    about: ABOUT_SECTION_PROMPT,
    experiences: EXPERIENCES_SECTION_PROMPT
  }

  def initialize(key, message)
    @key = key.to_sym
    @message = message
  end

  def call
    response = open_ai.complete("#{DICTIONARY[key]} #{message}")
    JSON.parse(response)['new_text']
  rescue
    message
  end
end
