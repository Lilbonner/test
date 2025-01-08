import './App.css';
import SearchBar from './components/SearchBar.tsx';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetail';
import FavoriteList from './components/FavoriteList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <SearchBar />
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="/favorites" element={<FavoriteList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
