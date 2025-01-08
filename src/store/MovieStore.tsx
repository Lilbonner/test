import { makeAutoObservable } from 'mobx';

class MovieStore {
    movies = [];
    selectedMovie = null;
    query = '';

    constructor() {
        makeAutoObservable(this);
    }

    setMovies(movies: any[]) {
        this.movies = movies;
    }

    setSelectedMovie(movie: any) {
        this.selectedMovie = movie;
    }

    setQuery(query: string) {
        this.query = query;
    }
}

export const movieStore = new MovieStore();
