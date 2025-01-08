import { makeAutoObservable } from 'mobx';

class FavoriteStore {
    favorites = [];

    constructor() {
        makeAutoObservable(this);
    }

    addFavorite(movie: any) {
        if (!this.favorites.some((fav) => fav.imdbID === movie.imdbID)) {
            this.favorites.push(movie);
        }
    }

    removeFavorite(movieId: string) {
        this.favorites = this.favorites.filter((movie) => movie.imdbID !== movieId);
    }
}

export const favoriteStore = new FavoriteStore();
