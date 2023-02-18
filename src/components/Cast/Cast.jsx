import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ThreeCircles } from 'react-loader-spinner';

import Error from 'components/Error/Error';
import { getMoviesCasting } from 'services/moviesApi';

import {
  ActorsItem,
  ActorsList,
  ActorsMassage,
  ActorsName,
} from './cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setLoading(true);
        const data = await getMoviesCasting(Number(movieId));

        setActors(data);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesDetails();
  }, [movieId]);

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
      {actors.length > 0 && !error && (
        <ActorsList>
          {actors.map(({ id, name, profile_path, character }) => (
            <ActorsItem key={id}>
              <img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                }
                alt={name}
                width={120}
                height={148}
              />
              <ActorsName>{name}</ActorsName>
              <p>Character: {character}</p>
            </ActorsItem>
          ))}
        </ActorsList>
      )}
      {actors.length === 0 && !error && (
        <ActorsMassage>
          Information about the actors of this film is not available.
        </ActorsMassage>
      )}
    </div>
  );
};

export default Cast;
