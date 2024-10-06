import React, { useState } from 'react';
import { styled } from 'styled-components';
import ijslander1 from '../assets/ijslander-1.webp';
import ijslander2 from '../assets/ijslander-2.webp';
import ijslander3 from '../assets/ijslander-3.webp';
import ijslander4 from '../assets/ijslander-4.webp';
import ijslander5 from '../assets/ijslander-5.webp';
import ijslander6 from '../assets/ijslander-6.webp';

// Styled container for the entire impressions section
const ImpressionsContainer = styled.div`
  width: 100vw;  /* Ensure it takes the full width of the viewport */
  margin: 0 auto;
  background-color: #f5f0e6;  /* Beige background */
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Flexbox container for the main image and thumbnails
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;  /* Place thumbnails on the left on larger screens */
    align-items: flex-start;
  }
`;

// Thumbnails container
const ThumbnailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 3 thumbnails per row on small screens */
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;  /* Vertical thumbnails on larger screens */
    margin-right: 20px;  /* Space between thumbnails and main image */
  }
`;

// Individual thumbnail
const Thumbnail = styled.img`
  width: 100px;
  height: 70px;
  border-radius: 5px;
  cursor: pointer;
  object-fit: cover;
  box-shadow: ${(props) => (props.isSelected ? '0 0 10px 2px #ffcc00' : '0 4px 6px rgba(0, 0, 0, 0.1)')};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px 2px #ffcc00;
  }

  @media (max-width: 768px) {
    width: 90px;  /* Adjust thumbnail size for smaller screens */
    height: 60px;
  }
`;

// Styled main image
const MainImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 100%;  /* Ensure it scales down on smaller screens */
  }
`;

// Styled title for "Impressies"
const Title = styled.h1`
  font-family: 'Lobster', cursive;
  font-size: 3rem;
  color: #ffcc00;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Impressions = () => {
  // State to track which image is being shown as the main image
  const [currentImage, setCurrentImage] = useState(ijslander1);

  // List of all images
  const images = [ijslander1, ijslander2, ijslander3, ijslander4, ijslander5, ijslander6];

  return (
    <ImpressionsContainer>
      {/* Title */}
      <Title>Impressies</Title>

      {/* Main Content: Thumbnails + Main Image */}
      <ContentContainer>
        {/* Thumbnails */}
        <ThumbnailsContainer>
          {images.map((img, index) => (
            <Thumbnail
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setCurrentImage(img)}  // Set clicked image as the main image
              isSelected={currentImage === img}    // Highlight the selected image
            />
          ))}
        </ThumbnailsContainer>

        {/* Main Image */}
        <MainImage src={currentImage} alt="Impression of De IJslander" />
      </ContentContainer>
    </ImpressionsContainer>
  );
};

export default Impressions;

