import React, { useState } from 'react';

const StarRating = ({ initialRating, onRate }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onRate(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          style={{ cursor: 'pointer', color: i <= rating ? 'gold' : 'gray' }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export {StarRating};
