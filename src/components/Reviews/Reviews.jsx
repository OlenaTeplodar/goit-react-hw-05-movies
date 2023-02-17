import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { getMoviesReviews } from '../../services/moviesApi';
import Error from 'components/Error/Error';
import { ActorsMassage, ActorsItem, ActorsName, ActorsList } from 'components/Cast/cast.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setLoading(true);
        const result = await getMoviesReviews(Number(movieId));
        console.log(result);
        setReviews(result);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesDetails();
  }, [movieId]);
  return (
    <>
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
      {reviews.length > 0 && (
        <ActorsList>
          {reviews.map(({ id, author, content }) => (
            <ActorsItem key={id} >
              <ActorsName>Author: {author}</ActorsName>
              <p>{content}</p>
            </ActorsItem>
          ))}
        </ActorsList>
      )}
      {reviews.length === 0 && !error && (
        <ActorsMassage>We don't have any reviews for this movie</ActorsMassage>
      )}
    </>
  );
};
export default Reviews;
