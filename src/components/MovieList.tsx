import { observer } from 'mobx-react';
import { movieStore } from '../store/MovieStore';
import MovieCard from './MovieCard';

const MovieList = observer(() => {
    return (
        <div>
            {movieStore.movies.map((movie: any) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
});

export default MovieList;
