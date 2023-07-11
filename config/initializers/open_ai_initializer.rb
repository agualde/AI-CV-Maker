class OpenAiInitializer
  include Singleton

  def initialize
    @client = OpenAI::Client.new
  end

  def complete(message, options = {}) 
    response = @client.chat(
      parameters: {
        model: options[:model] || "gpt-3.5-turbo", 
        messages: [
          { role: "system", content: 'You are my marketing consultant and are helping me upgrade my CV to land a better job.'}, 
          { role: "user", content: message}], 
          temperature: options[:temperature] || 1.0,
      })

    response.dig("choices", 0, "message", "content")
  rescue => e
    message
  end
end
