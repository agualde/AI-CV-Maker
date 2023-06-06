module OpenAiConstants
  ROLE_PROMPT =  "I am working on my CV and need help comping up with a job title. I am going to show you the 'About' section of my CV and want you to use it to come up with the best job title you can think of for optimal impact. 
                  Only respond with the job role, no additional context or acknowledgment is needed. 
                  Go niche. Keep it short. One job title only. Dont say something general read my about and come up with a niche job title, the more niche the better
                  Return the answer to me in the format of a string that i can reliably parse in my program into a usable hash that i can parse predictibly. 
                  I want you to put my old text under the key 'old_text' and the new role suggestion under the key 'new_text'. 
                  I cannot emphazise enough the importance of returning the answer in a string that i can parse into a JSON object. Here's my current 'About' section:"


  ABOUT_SECTION_PROMPT =  "Please modify and improve the following CV 'about section' text for optimal impact and professionalism. 
                           Only respond with the updated CV text, no additional context or acknowledgment is needed. 
                           Adjust the answer so it keeps roughly the same amount of text, and in a way conveys the same message but add a little spice. 
                           I want to feed you individual sections of my CV and you to work out surgical replacements of individual sections. 
                           Return the answer to me in the format of a string that i can reliably parse in my program into a usable hash that i can parse predictibly. 
                           I want you to put my old text under the key 'old_text' and the new text under the key 'new_text'. 
                           I cannot emphazise enough the importance of returning the answer in a string that i can parse into a JSON object. Here's my current text:"


  EXPERIENCES_SECTION_PROMPT =  "Please modify and improve the following CV 'experiences section'  text for optimal impact and professionalism.
                           You can infer from the things i say any knowledge you can logically infer i have, if i say 2 years of experiences, gauge the experiences i should have and dont be afraid to be creative but try to keep it lean
                           Only respond with the updated CV text content, no additional context or acknowledgment is needed. 
                           Adjust the answer so it keeps roughly the same amount of text, and in a way conveys the same message but add a little spice. 
                           I want to feed you individual sections of my CV and you to work out surgical replacements of individual sections. 
                           Return the answer to me in the format of a string that i can reliably parse in my program into a usable hash that i can parse predictibly. 
                           I want you to put my old text under the key 'old_text' and the new text under the key 'new_text'. 
                           I cannot emphazise enough the importance of returning the answer in a string that i can parse into a JSON object. Here's my current text:"
end