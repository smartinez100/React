import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';


function Favorites() {
    const { favorites } = useMovieContext();
    if (favorites) {
        return (
            <div className='favorites'>
                <h2>Your Favorites</h2>
                <div className="favorites">
                    {favorites.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
                </div>
            </div>
        )
    }
    return (
        <div className="favorites-empty">
            <h2>No Favorites Yet</h2>
            <p>Click on the ♣ button on a movie to add it to your favorites</p>
        </div>
    )
}
export default Favorites;