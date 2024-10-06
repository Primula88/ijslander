import React, { useState } from 'react';
import { styled } from 'styled-components';

// Sample review data
const reviews = [
  {
    name: "Dyonne",
    date: "September 2024",
    rating: 5,
    comment: "Gisteren een ge-wel-dige strand- en buitenrit gemaakt dankzij jullie. Ik had al een aantal jaar niet meer gereden, maar had mijn vertrouwen zo terug. Dit kwam absoluut dankzij Paskar én de verfijnde begeleiding van Moos. De vibe was een 10/10. Een liefdevolle plek dit! Ook de paarden genieten merkbaar van de rit. Ik kom zeker eens terug!",
  },
  {
    name: "Lio",
    date: "October 2024",
    rating: 5,
    comment: "Super leuke rit gehad met begeleiding van Nina die het top deed heel relax. Leuke rit op strand en langs het bos! Ik kom zeker en vast terug.",
  },
  {
    name: "Els",
    date: "Augustus 2024",
    rating: 5,
    comment: "Mijn dochter heeft hier een geweldige strandrit gemaakt. Fijne en kundige begeleider die er zelf ook echt zin in heeft. Lieve en goed verzorgde paarden. Het was fantastisch en een echte aanrader.",
  },
  {
    name: "Oetske",
    date: "July 2023",
    rating: 5,
    comment: "Leuke stal met IJslandse paarden. We hebben hier met vriendinnen een buitenrit gemaakt over het strand, dat was een fantastische ervaring!",
  },
  {
    name: "Mariska",
    date: "September 2023",
    rating: 5,
    comment: "Super service, wij moesten het de eerste keer helaas verplaatsen ivm ziekte maar dat was geen probleem. Tot de volgende! 😘",
  },
];

// Styled container for the scrolling reviews
const ReviewsContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// Wrapper for sliding effect of multiple reviews
const ReviewWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: ${(props) => props.totalPages * 100}%;
`;

// Styled component for individual review cards
const ReviewCard = styled.div`
  flex: 0 0 33.33%; /* Show 3 reviews at a time */
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReviewContent = styled.div`
  font-size: 1rem;
  line-height: 1.4;
`;

const Rating = styled.div`
  font-size: 1.2rem;
  color: #FFD700; /* Gold color for stars */
`;

const ReviewerInfo = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

// Arrow buttons
const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  ${({ left }) => (left ? 'left: 0;' : 'right: 0;')};
  border-radius: 50%;
  font-size: 1.5rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

// Styled title with the specified font
const Title = styled.h1`
  font-family: 'Lobster', cursive;
  font-size: 3rem;
  color: #ffcc00;
  margin-bottom: 20px;
  text-align: center;
`;

// Main component for scrolling reviews
const ReviewGallery = () => {
  const [index, setIndex] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage); // Calculate total number of pages

  const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  return (
    <ReviewsContainer>
      {/* Title for the Reviews Section */}
      <Title>Reviews</Title>

      {/* Left Arrow */}
      <ArrowButton left onClick={handlePrevClick}>
        ❮
      </ArrowButton>

      {/* Review Cards */}
      <ReviewWrapper totalPages={totalPages} style={{ transform: `translateX(-${index * 100}%)` }}>
        {reviews.map((review, i) => (
          <ReviewCard key={i}>
            <ReviewContent>{review.comment}</ReviewContent>
            <ReviewerInfo>{review.name}, {review.date}</ReviewerInfo>
            <Rating>Rating: {"⭐".repeat(review.rating)}</Rating>
          </ReviewCard>
        ))}
      </ReviewWrapper>

      {/* Right Arrow */}
      <ArrowButton onClick={handleNextClick}>
        ❯
      </ArrowButton>
    </ReviewsContainer>
  );
};

export default ReviewGallery;

