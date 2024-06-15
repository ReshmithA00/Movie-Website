from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

TMDB_API_KEY = 'your_tmdb_api_key'
TMDB_BASE_URL = 'https://api.themoviedb.org/3'

@app.route('/api/movies/<movie_id>', methods=['GET'])
def get_movie_details(movie_id):
    movie_url = f'{TMDB_BASE_URL}/movie/{movie_id}?api_key={TMDB_API_KEY}&append_to_response=credits,reviews'
    response = requests.get(movie_url)
    data = response.json()
    return jsonify(data)

@app.route('/api/search', methods=['GET'])
def search_movies():
    query = request.args.get('query')
    search_url = f'{TMDB_BASE_URL}/search/movie?api_key={TMDB_API_KEY}&query={query}'
    response = requests.get(search_url)
    data = response.json()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
