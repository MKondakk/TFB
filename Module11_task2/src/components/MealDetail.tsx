import React from 'react';
import {CountryMealList} from './CountryMealList';

const MealDetail = ({ meal, onBack, onCountryClick }) => {
  return (
    <div className="meal_detail">
      <button onClick={onBack}>Back to List</button>
      <h2>{meal.strMeal}</h2>
      <p>
        <strong>Country:</strong>{' '}
        <button onClick={onCountryClick}>{meal.strArea}</button>
      </p>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        style={{ maxWidth: '300px' }}
      />
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export { MealDetail };
