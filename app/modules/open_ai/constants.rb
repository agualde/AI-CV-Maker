module OpenAi
  module Constants
    ABOUT_SECTION_PROMPT =  "Please modify and improve the following CV 'about section' text for optimal impact and professionalism. 
                            Only respond with the updated CV text, no additional context or acknowledgment is needed. 
                            Adjust the answer so it conveys the same message but add a little spice act as my marketing advisor think that i am not that good at selling myself to recruiters.
                            But try to keep it to 300 characters.  
                            Return the answer to me in the format of a string that i can reliably parse in my program into a usable hash that i can parse predictibly. 
                            I want you to put my old text under the key 'old_text' and the new text under the key 'new_text'. 
                            I cannot emphazise enough the importance of returning the answer in a string that i can parse into a JSON object. Here's my current text:"


    EXPERIENCES_SECTION_PROMPT =  "Please take the following 'Experience' section from a CV and enhance it. The objective is to make the text more impactful, professional, and interesting also choose skills that you assume a candidate of the given field has and add them. Assume that all mentioned skills imply a deeper knowledge base, and don't hesitate to add relevant technical terms that would typically accompany the given skills. The end product should still reflect the original intent and make the person more appealing to recruiters and demonstrate my abilities.
                                    An important requirement is that this text should not be longer than ~300 characters.
                                    The results should be returned in a string format, suitable for conversion into a JSON object. The original text should be mapped to the key 'old_text', and the enhanced version should be mapped to the key 'new_text'. Note that it's critical to maintain a consistent and parseable format for the return string.
                                    Here's the text that needs enhancement:"
  end
end