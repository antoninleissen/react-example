import React, {useState} from 'react';

// List is a component I created to present a list of movies
import List from './components/List'

function App() {

    // Declaring a state variable that will contain the list of movies
    const [movies, setMovies] = useState([
        {
          id:1,
          name:"Game of Thrones"
        }, 
        {
          id:2,
          name:"Harry Potter"
        }, 
        {
          id:3,
          name:"Arsène Lupin"
        }
    ]);

    // Declaring a state variable that will contain the list of favorite movies
    const [favoriteMovies, setfavoriteMovies] = useState([]);

    // addTofavMoviesList is a function that add a movie to the favorite movies list, and remove it from 
    // the movies list
    const addTofavMoviesList = movie => {
        setfavoriteMovies(prevState => [...prevState, movie]);
        setMovies(movies.filter(item => item.id !== movie.id));
    }
    
    // addToMoviesList is a function that add a movie to the movies list, and remove it from 
    // the favorite movies list
    const addToMoviesList = movie => {
        setMovies(prevState => [...prevState, movie]);
        setfavoriteMovies(favoriteMovies.filter(item => item.id !== movie.id));
    }

    return (
        <div className="App">
            <div className="left">
                <h3 className="text-primary">Movies</h3>
                <List list={movies} callback={addTofavMoviesList} type="NO"/>
            </div>
            <div className="right">
                <h3>Favorite Movies</h3>
                <List list={favoriteMovies} callback={addToMoviesList} type="FAV"/>
            </div>
        </div>
    );
}

export default App;
