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

// Styled container for the reviews
const ReviewsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;  /* Space between cards */
`;

// Styled component for individual review cards
const ReviewCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #f0f0f0;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ReviewContent = styled.div`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  font-size: 1.2rem;
  color: #FFD700; /* Gold color for stars */
`;

const ReviewerInfo = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

// Styled title with the specified font
const Title = styled.h1`
  font-family: 'Lobster', cursive;
  font-size: 3rem;
  color: #ffcc00;
  margin-bottom: 20px;
  text-align: center;
`;

const ReviewGallery = () => {
  const [expandedReview, setExpandedReview] = useState(null);

  // Function to toggle review view
  const toggleReview = (index) => {
    setExpandedReview(index === expandedReview ? null : index); // Toggle open/close
  };

  return (
    <div>
      {/* Title for the Reviews Section */}
      <Title>Reviews</Title>

      {/* Reviews Container */}
      <ReviewsContainer>
        {reviews.map((review, i) => (
          <ReviewCard key={i} onClick={() => toggleReview(i)}>
            <ReviewContent>
              {expandedReview === i
                ? review.comment // Show full comment if expanded
                : `${review.comment.substring(0, 30)}...`} {/* Show truncated comment */}
            </ReviewContent>
            <ReviewerInfo>{review.name}, {review.date}</ReviewerInfo>
            <Rating>Rating: {"⭐".repeat(review.rating)}</Rating>
          </ReviewCard>
        ))}
      </ReviewsContainer>
    </div>
  );
};

export default ReviewGallery;

