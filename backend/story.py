import openai
from threading import Thread
import constants

PROMPT_START = "Write a short kids story about "
IMG_PROMPT_START = 'childish cartoon picture of '

openai.api_key = constants.OAI_KEY

def generate_pictures(index, dict, pic_prompt):
    pic_prompt = IMG_PROMPT_START + pic_prompt

    response = openai.Image.create(
    prompt=pic_prompt, 
    n=1,
    size="512x512"
    )
    image_url = response['data'][0]['url']
    
    dict[index]["picture"] = image_url

def generate_story(theme, characters):
    #
    # Get Characters for prompt
    #
    story_characters = ", ".join(characters[:len(characters) - 1])
    story_characters += ", themed on " + characters[-1]
    
    #
    # Construct Prompt
    #
    user_prompt = PROMPT_START + story_characters + " and " + theme
    story_response = openai.Completion.create(
        model = "text-davinci-003",
        prompt = user_prompt,
        temperature = 1,
        max_tokens = 4096 - len(user_prompt), # max length possible
        stream = False
    )

    story = story_response['choices'][0]['text']
    story = story.split('\n\n')[1:]
    
    threads = []
    story_book = {}
    for index in range(len(story)):
        story_book[index] = {"text": story[index]}

        thread = Thread(target=generate_pictures, args=(index, story_book, story[index]))
        thread.start()
        threads.append(thread)

    for thread in threads:
        thread.join()

    return (len(story), story_book)
