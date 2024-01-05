// StarRating.js

import { useState } from 'react';
import './StarRating.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value === rating ? 0 : value);
  };

  const getEmoji = () => {
    switch (rating) {
      case 1:
        return '😞';
      case 2:
        return '😐';
      case 3:
        return '🙂';
      case 4:
        return '😃';
      case 5:
        return '😍';
      default:
        return '';
    }
  };

  return (
    <div>
      <div className="star-rating">
        {[...Array(5)].map((_, index) => {
          const value = index + 1;
          return (
            <span
              key={value}
              className={value <= rating ? 'star filled' : 'star'}
              onClick={() => handleClick(value)}
            >
              ★
            </span>
          );
        })}
        <span className="rating-text">{getEmoji()}</span>
      </div>
    </div>
  );
};

export default StarRating;
