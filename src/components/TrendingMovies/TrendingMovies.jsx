import { useState, useEffect } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

import MoviesList from 'components/MoviesList/MoviesList';
import Error from 'components/Error/Error';

import { getMoviesTrending } from '../../services/moviesApi';

const TrendingMovies = () => {
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const result = await getMoviesTrending();
        setMovie(result);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <ThreeCircles
        height="100"
        width="100"
        color="#2642dd"
        wrapperStyle={{}}
        wrapperClass=""
        visible={loading && true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#6478eb"
        innerCircleColor="#424f99"
        middleCircleColor="#031992"
      />
      {error && <Error />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default TrendingMovies;
