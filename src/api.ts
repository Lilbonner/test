const API_KEY = '7e59b8de';

export const fetchMovies = async (query: string) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();
    return data.Search || [];
};

export const fetchMovieDetails = async (id: string) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
    const data = await response.json();
    return data || null;
};
