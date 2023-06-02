class OpenAiService
  attr_accessor :message, :prompt

  def initialize(prompt, message)
    @prompt = prompt
    @message = message
  end

  def call
    response = OpenAi.complete("#{prompt} #{message}")
    JSON.parse(response)['new_text']
  rescue => e
    'Error processing the response, please try again!'
  end
end