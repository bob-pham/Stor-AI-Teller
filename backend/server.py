from flask import Flask, request
from flask_cors import CORS
from story import generate_story
import json

app = Flask(__name__)
CORS(app)


@app.route('/generate-story', methods=['POST'])
def story_generator():
    theme = json.loads(request.form.get('theme'))
    characters = json.loads(request.form.get('characters'))
    
    (length, story_book) = generate_story(theme, characters)
    response = json.dumps({'length': length, 'book': story_book})

    return response


if __name__ == '__main__':
    app.run()