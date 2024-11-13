import css from './MovieReviews.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { reviewsById } from '../../api';
import toast from 'react-hot-toast';

const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async () => {
      try {
        const response = await reviewsById(movieId);
        setReviews(response.results);
      } catch (error) {
        toast.error(
          `Whoops, we found a problem! ${error.message} Please try again later!`,
          {
            position: 'top-center',
            duration: 2000,
          }
        );
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div className={css.container}>
      {reviews !== null &&
        reviews.map(item => {
          return (
            <div key={item.id} className={css.review}>
              <h3 className={css.author}>Author: {item.author}</h3>
              <p className={css.content}>{item.content}</p>
            </div>
          );
        })}
    </div>
  );
};

export default MovieReviews;
