import { useState, useEffect } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  Outlet,
} from 'react-router-dom';

import { getMoviesDetails } from 'services/moviesApi';

import { IoArrowUndoSharp } from 'react-icons';
import { ThreeCircles } from 'react-loader-spinner';

import Error from '../../Error/Error';

import {
  GoBack,
  MovieCard,
  MovieInfo,
  MovieItem,
  MovieLink,
  MovieList,
  MovieTitle,
  WrapperCards,
} from './movieDetailsPage.styled';

const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/movies';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const result = await getMoviesDetails(Number(movieId));
        setMovie(result);
      } catch (error) {
        setError(error.message);
      } finally {
      }
      setLoading(false);
    };
    fetchMovieDetails();
  }, [movieId]);

  const goBack = () => navigate(from);

  return (
    <main>
      <GoBack onClick={goBack}>
        <IoArrowUndoSharp />
        Go Back
      </GoBack>
      {movie && (
        <>
          {error && <Error />}
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

          <MovieCard>
            <img
              src={
                movie.poster_path
                  ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                  : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
              }
              alt={movie.title}
              width={300}
            />

            <MovieInfo>
              <h2>
                {movie.title ? movie.title : 'There is no movie tittle yet'} (
                {new Date(movie.release_date).getFullYear()})
              </h2>
              <h5>User Score: {movie.vote_average.toFixed(1)}</h5>
              <h4>Overview</h4>
              <p>{movie.overview}</p>
              <h5>Genres</h5>
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </MovieInfo>
          </MovieCard>
          <WrapperCards>
            <MovieTitle>Additional information</MovieTitle>
            <MovieList>
              <MovieItem>
                <MovieLink state={{ from }} to={`/movies/${movieId}/cast`}>
                  Cast
                </MovieLink>
              </MovieItem>

              <MovieItem>
                <MovieLink state={{ from }} to={`/movies/${movieId}/reviews`}>
                  Reviews
                </MovieLink>
              </MovieItem>
            </MovieList>
            <Outlet />
          </WrapperCards>
        </>
      )}
    </main>
  );
};

export default MoviesDetailsPage;
