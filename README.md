# Stor-AI-Teller

By Lilian & Bob Pham

Introducing StorAI Teller, the cutting-edge web application that harnesses the power of Artificial Intelligence to revolutionize the way kids and parents create stories. We all know the benefits of reading for children: it enhances vocabulary, improves writing skills, fosters independence and self-confidence, and ignites imagination. Unfortunately, not everyone has equal access to books. Libraries may be scarce, and books can be expensive. Moreover, digital books are often behind paywalls.

With StoryAI Teller, these problems are a thing of the past. Our web app generates unique stories at the click of a button, offering an infinite well of exciting adventures for young readers. Our innovative machine learning algorithm uses Natural Language Processing techniques to analyze user inputs, tailoring each story to their interests and preferences.

Best of all, our app is currently free. While AI-generated text and images will always be significantly cheaper than hiring professional writers and illustrators, we want to make sure everyone has access to our incredible platform.

In short, StorAI Teller is a game-changer. We're leveraging state-of-the-art technologies such as AI, machine learning, and natural language processing to empower young readers and ignite their love of storytelling. Join us on this exciting journey today.

## Demo/Explaination Video

[![Demo Video](https://img.youtube.com/vi/hzhaBG5DpFo/hqdefault.jpg)](http://www.youtube.com/watch?v=hzhaBG5DpFo)

## Try It Yourself

#### To Launch Frontend Webapp

1. Install Packages
```
cd frontend
npm install
```
2. Launch Webapp

```
cd frontend
npm run dev
```
#### To Launch Backend Server:

* Commands will be different on different operating systems, google is your friend

1. Start Python Virtual Environment and Install Packages
```
cd backend
python venv
venv/Scripts/activate
python -m pip install flask
python -m pip install openai
``` 
2. Set OpenAI API Key
```
create a file called constants.py
(in constants.py) OAI_KEY = [Your Key, keep this secret]
```
3. Start Server
``` 
cd backend
venv/Scripts/activate
python server.py
``` 

### Gallery
<img src="./frontend/src/assets/Screenshot 2023-01-29 154914.png">
<img src="./frontend/src/assets/create_story_page.png">
<img src="./frontend/src/assets/loading_page.png">
<img src="./frontend/src/assets/page1.png">
<img src="./frontend/src/assets/pagelast.png">

### Futher Reading
https://bobpham.vercel.app/storai-teller
