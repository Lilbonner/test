import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, CardActionArea, CardActions } from '@mui/material';

const MovieCard = ({ movie }: { movie: any }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movie/${movie.imdbID}`);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    height="200"
                    image={movie.Poster}
                    alt={movie.Title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.Title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {movie.Year}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    add to favorite
                </Button>
            </CardActions>
        </Card>
    );
};

export default MovieCard;
