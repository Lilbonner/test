import { observer } from 'mobx-react';
import { Grid } from '@mui/material';
import { movieStore } from '../store/MovieStore';
import MovieCard from './MovieCard';

const MovieList = observer(() => {
    return (
        <Grid container spacing={3} justifyContent="center">
            {movieStore.movies.map((movie: any) => (
                <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
                    <MovieCard movie={movie} />
                </Grid>
            ))}
        </Grid>
    );
});

export default MovieList;
