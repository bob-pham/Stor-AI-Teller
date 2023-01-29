import openai
import constants

openai.api_key = constants.OAI_KEY

# response = openai.Image.create(
#   prompt="a stickman playing the banjo in a simple cartoon style",
#   n=1,
#   size="1024x1024"
# )
# image_url = response['data'][0]['url']
# print(response)
# print(image_url)

# response = openai.Completion.create(
#   model= "text-davinci-003",
#   prompt = "write me a short kids story about 3 friends creating a project for a hackathon",
#   temperature = 0,
#   max_tokens = 3000,
#   stream = False
# )
x = "\n\nOnce upon a time, there were three friends named Alex, Sarah, and John. They were all very passionate about technology and wanted to make a difference in the world.\n\nOne day, they heard about a hackathon that was coming up and decided to enter. They had a great idea for a project that would help people in their community, but they weren't sure how to make it happen.\n\nSo, they got to work. They spent hours researching, brainstorming, and coding. They worked together to create a project that would help people in their community.\n\nFinally, the day of the hackathon arrived. Alex, Sarah, and John presented their project to the judges and were thrilled when they won first place!\n\nThe three friends were so proud of their accomplishment and were excited to see how their project would help people in their community. They had worked hard and it had paid off.\n\nThe end."
print(x)