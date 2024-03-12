import React, { useState } from 'react';
import { MealItem } from './MealItem';

const MealList = ({ meals, onMealClick }) => {

  return (
    <div className="meal_list">
      {meals && meals.length > 0 ? (
        meals.map((meal) => (
          <MealItem
            key={meal.idMeal}
            meal={meal}
            onClick={() => onMealClick(meal)}
          />
        ))
      ) : (
        <p>No meals found by this name.</p>
      )}
    </div>
  );
};

export { MealList };
