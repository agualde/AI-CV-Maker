
require 'chatgpt/client'

class OpenAi
  def self.instance
    @instance ||= OpenAI::Client.new
  end

  def self.complete(message, options = {}) 
    response = OpenAi.instance.chat(
      parameters: {
        model: options[:model] || "gpt-3.5-turbo", # Required.
        messages: [{ role: "user", content: message}], # Required.
          temperature: options[:temperatue] || 1.0,
      })

    response.dig("choices", 0, "message", "content")
  rescue => e
    byebug
  end
end
