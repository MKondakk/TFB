import React, { useState, useEffect } from 'react';
import { RatingProvider } from './components/RatingContext';
import { MealList } from './components/MealList';
import { MealDetail } from './components/MealDetail';
import { CountryMealList } from './components/CountryMealList';
import './style.css';

function App() {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    }

    fetchMeals();
  }, [searchTerm]);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
    setSelectedCountry('');
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCountryClick = () => {
    const country = selectedMeal?.strArea || '';
    setSelectedCountry(country);
    setSelectedMeal(null);
  };

  return (
    <RatingProvider>
      <div>
        {selectedMeal ? (
          <MealDetail
            meal={selectedMeal}
            onBack={() => setSelectedMeal(null)}
            onCountryClick={handleCountryClick}
          />
        ) : selectedCountry ? (
          <CountryMealList country={selectedCountry} onBack={() => setSelectedCountry('')} onMealClick={handleMealClick} />
        ) : (
          <div>
            <div>
              <label>
                Search Meals: {' '}
                <input type="text" value={searchTerm} onChange={handleSearchChange} />
              </label>
            </div>
            <MealList meals={meals} onMealClick={handleMealClick} />
          </div>
        )}
      </div>
    </RatingProvider>
  );
}

export { App };
