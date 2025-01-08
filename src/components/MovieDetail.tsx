import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import {Typography, CardMedia, Grid, Box, CircularProgress, Alert } from '@mui/material';

const MovieDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDetails = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const data = await fetchMovieDetails(id);
                setMovie(data);
            } catch (err: any) {
                setError(err.message);
            }
            setIsLoading(false);
        };
        fetchDetails();
    }, [id]);

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Alert severity="error">{error}</Alert>
            </Box>
        );
    }

    if (!movie) return <div>Loading...</div>;

    return (
        <Box sx={{ padding: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <CardMedia
                        component="img"
                        image={movie.Poster}
                        alt={movie.Title}
                        sx={{ borderRadius: 2 }}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h3" component="div">
                        {movie.Title} ({movie.Year})
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary', marginBottom: 2 }}>
                        {movie.Genre}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.secondary', marginBottom: 2 }}>
                        IMDb Rating: {movie.imdbRating}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        {movie.Plot}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ marginTop: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                        Additional Information
                    </Typography>
                    <Typography variant="body1">
                        <strong>Director:</strong> {movie.Director}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Writer:</strong> {movie.Writer}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Actors:</strong> {movie.Actors}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Country:</strong> {movie.Country}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ marginTop: 3 }}>
                <Grid item xs={12}>
                    <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                        Trailer
                    </Typography>
                    <iframe
                        width="100%"
                        height="400"
                        src={`https://www.youtube.com/embed/${movie.imdbID}`} // Пример ссылки на видео
                        title="Movie Trailer"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MovieDetails;
