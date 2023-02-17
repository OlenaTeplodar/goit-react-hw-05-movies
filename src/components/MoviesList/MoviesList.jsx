import { useLocation } from 'react-router-dom';

import { MoviesLink, MoviesList, MoviesItem } from './moviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesList>
      {movies.map(({ id, title }) => (
        <MoviesItem key={id}>
          <MoviesLink state={{ from: location }} to={`/movies/${id}`}>
            {title}
          </MoviesLink>
        </MoviesItem>
      ))}
    </MoviesList>
  );
};

export default MoviesList;

MoviesList.defaultProps = {
  items: [],
};
