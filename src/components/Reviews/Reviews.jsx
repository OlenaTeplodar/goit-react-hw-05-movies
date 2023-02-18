import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { getMoviesReviews } from '../../services/moviesApi';
import Error from 'components/Error/Error';

import {
  ReviewsMassage,
  ReviewsName,
  ReviewsList,
  ReviewsItem,
} from '../Reviews/reviews.styled';

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
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id} >
              <ReviewsName>Author: {author}</ReviewsName>
              <p>{content}</p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
      {reviews.length === 0 && !error && (
        <ReviewsMassage>We don't have any reviews for this movie</ReviewsMassage>
      )}
    </>
  );
};
export default Reviews;
