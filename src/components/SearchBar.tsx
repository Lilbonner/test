import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { movieStore } from '../store/MovieStore';
import { fetchMovies } from '../api';
import { TextField } from '@mui/material';

const SearchBar = observer(() => {
    const [query, setQuery] = useState('');

    const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        const movies = await fetchMovies(event.target.value);
        movieStore.setMovies(movies);
    };

    return (
        <TextField
            label="Поиск фильмов"
            variant="outlined"
            fullWidth
            value={query}
            onChange={handleSearch}
        />
    );
});

export default SearchBar;
