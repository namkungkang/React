import './App.css';
import Movie from './components/Movie';
import { movies } from './movieDummy';

function App() {
  return (
    <>
      {movies.results.map((item) => (
        <Movie
        
          poster_path={item.poster_path}
          title={item.title}
          vote_average={item.vote_average}
          
        />
      ))}
    </>
  );
}

export default App;
