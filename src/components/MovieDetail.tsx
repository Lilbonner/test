import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const MovieDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const data = await fetchMovieDetails(id);
            setMovie(data);
        };
        fetchDetails();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <Card>
            <CardMedia
                image={movie.Poster}
                title={movie.Title}
                style={{ height: 300 }}
            />
            <CardContent>
                <Typography variant="h4">{movie.Title}</Typography>
                <Typography variant="h6">Genre: {movie.Genre}</Typography>
                <Typography variant="h6">Director: {movie.Director}</Typography>
                <Typography variant="body1">{movie.Plot}</Typography>
                <iframe
                    src={`https://www.youtube.com/embed/${movie.imdbID}`}
                    title="Movie Trailer"
                    width="100%"
                    height="315"
                    allowFullScreen
                ></iframe>
            </CardContent>
        </Card>
    );
};

export default MovieDetails;
