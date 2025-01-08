import { observer } from 'mobx-react';
import { favoriteStore } from '../store/FavStore';
import MovieCard from './MovieCard';

const FavoriteList = observer(() => {
    return (
        <div>
            {favoriteStore.favorites.map((movie: any) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
});

export default FavoriteList;
