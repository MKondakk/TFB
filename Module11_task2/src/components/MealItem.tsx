import React, {useState} from 'react';
import { StarRating } from './StarRating';
import { useRating } from './RatingContext';

const MealItem = ({ meal, onClick }) => {
  const { ratings, updateRating } = useRating();
  const rating = ratings[meal.idMeal] || 0;

  const handleRate = (newRating) => {
    updateRating(meal.idMeal, newRating);
  };

  const handleMealClick = () => {
    onClick(meal);
  };


  return (
    <div className="meal_item">
      <h3 onClick={handleMealClick}>{meal.strMeal}</h3>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        style={{ maxWidth: '200px' }}
        onClick={handleMealClick}
      />
      <StarRating initialRating={rating} onRate={handleRate} />
    </div>
  );
};

export { MealItem };
