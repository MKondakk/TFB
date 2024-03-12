import React, { useState, useEffect } from 'react';
import { MealList } from './MealList';

const CountryMealList = ({ country, onBack, onMealClick }) => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchMealsByCountry() {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setMeals(data.meals || []);
            } catch (error) {
                console.error('Error fetching meals by country:', error);
            }
        }

        fetchMealsByCountry();
    }, [country]);

    const handleMealClick = async (meal) => {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const data = await response.json();
          const selectedMealWithDetails = data.meals[0];
    
          onMealClick(selectedMealWithDetails);
        } catch (error) {
          console.error('Error fetching detailed meal information:', error);
        }
      };

    return (
        <div>
            <button onClick={onBack}>Back to List</button>
            <h2>Meals from {country}</h2>
            <MealList meals={meals} onMealClick={handleMealClick} />
        </div>
    );
};

export { CountryMealList };
