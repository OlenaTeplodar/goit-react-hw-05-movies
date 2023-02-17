import { useLocation } from 'react-router-dom';

import { MoviesLink, MoviesLists, MoviesItem } from './moviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesLists>
      {movies.map(({ id, title }) => (
        <MoviesItem key={id}>
          <MoviesLink state={{ from: location }} to={`/movies/${id}`}>
            {title}
          </MoviesLink>
        </MoviesItem>
      ))}
    </MoviesLists>
  );
};

export default MoviesList;

MoviesList.defaultProps = {
  items: [],
};
