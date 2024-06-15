import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetail = ({ match }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get(`http://localhost:5000/api/movies/${match.params.id}`);
            setMovie(response.data);
        };

        fetchMovie();
    }, [match.params.id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <h2>Cast</h2>
            <ul>
                {movie.credits.cast.map(actor => (
                    <li key={actor.id}>{actor.name} as {actor.character}</li>
                ))}
            </ul>
            <h2>Reviews</h2>
            <ul>
                {movie.reviews.results.map(review => (
                    <li key={review.id}>
                        <h3>{review.author}</h3>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
            <h2>Trailer</h2>
            {movie.videos?.results?.length > 0 && (
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Trailer"
                ></iframe>
            )}
        </div>
    );
};

export default MovieDetail;
