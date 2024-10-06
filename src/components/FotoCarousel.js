import React, { useState } from 'react';
import styled from 'styled-components';

// Importing all images from the fotos folder
import ijslander1 from '../assets/fotos/ijslander-1.jpg';
import ijslander2 from '../assets/fotos/ijslander-2.jpg';
import ijslander3 from '../assets/fotos/ijslander-3.jpg';
import ijslander4 from '../assets/fotos/ijslander-4.jpg';
import ijslander5 from '../assets/fotos/ijslander-5.jpg';
import ijslander6 from '../assets/fotos/ijslander-6.jpg';
import ijslander7 from '../assets/fotos/ijslander-7.jpg';
import ijslander8 from '../assets/fotos/ijslander-8.jpg';
import ijslander9 from '../assets/fotos/ijslander-9.jpg';
import ijslander10 from '../assets/fotos/ijslander-10.jpg';
import ijslander11 from '../assets/fotos/ijslander-11.jpg';
import ijslander12 from '../assets/fotos/ijslander-12.jpg';
import ijslander13 from '../assets/fotos/ijslander-13.jpg';
import ijslander14 from '../assets/fotos/ijslander-14.jpg';
import ijslander15 from '../assets/fotos/ijslander-15.jpg';
import ijslander16 from '../assets/fotos/ijslander-16.jpg';
import ijslander17 from '../assets/fotos/ijslander-17.jpg';
import ijslander18 from '../assets/fotos/ijslander-18.jpg';
import ijslander19 from '../assets/fotos/ijslander-19.jpg';
import ijslander20 from '../assets/fotos/ijslander-20.jpg';
import ijslander21 from '../assets/fotos/ijslander-21.jpg';
import ijslander22 from '../assets/fotos/ijslander-22.jpg';
import ijslander23 from '../assets/fotos/ijslander-23.jpg';
import ijslander24 from '../assets/fotos/ijslander-24.jpg';
import ijslander25 from '../assets/fotos/ijslander-25.jpg';
import ijslander26 from '../assets/fotos/ijslander-26.jpg';
import ijslander27 from '../assets/fotos/ijslander-27.jpg';
import ijslander28 from '../assets/fotos/ijslander-28.jpg';
import ijslander29 from '../assets/fotos/ijslander-29.jpg';
import ijslander30 from '../assets/fotos/ijslander-30.jpg';
import ijslander31 from '../assets/fotos/ijslander-31.jpg';
import ijslander32 from '../assets/fotos/ijslander-32.jpg';
import ijslander33 from '../assets/fotos/ijslander-33.jpg';
import ijslander34 from '../assets/fotos/ijslander-34.jpg';
import ijslander35 from '../assets/fotos/ijslander-35.jpg';
import ijslander36 from '../assets/fotos/ijslander-36.jpg';
import ijslander37 from '../assets/fotos/ijslander-37.jpg';
import ijslander38 from '../assets/fotos/ijslander-38.jpg';
import ijslander39 from '../assets/fotos/ijslander-39.jpg';
import ijslander40 from '../assets/fotos/ijslander-40.jpg';
import ijslander41 from '../assets/fotos/ijslander-41.jpg';
import ijslander42 from '../assets/fotos/ijslander-42.jpg';
import ijslander43 from '../assets/fotos/ijslander-43.jpg';
import ijslander44 from '../assets/fotos/ijslander-44.jpg';
import ijslander45 from '../assets/fotos/ijslander-45.jpg';
import ijslander46 from '../assets/fotos/ijslander-46.jpg';
import ijslander47 from '../assets/fotos/ijslander-47.jpg';
import ijslander48 from '../assets/fotos/ijslander-48.jpg';
import ijslander49 from '../assets/fotos/ijslander-49.jpg';
import ijslander50 from '../assets/fotos/ijslander-50.jpg';
import ijslander51 from '../assets/fotos/ijslander-51.jpg';
import ijslander52 from '../assets/fotos/ijslander-52.jpg';
import ijslander53 from '../assets/fotos/ijslander-53.jpg';
import ijslander54 from '../assets/fotos/ijslander-54.jpg';
import ijslander55 from '../assets/fotos/ijslander-55.jpg';
import ijslander56 from '../assets/fotos/ijslander-56.jpg';
import ijslander57 from '../assets/fotos/ijslander-57.jpg';
import ijslander58 from '../assets/fotos/ijslander-58.jpg';
import ijslander59 from '../assets/fotos/ijslander-59.jpg';
import ijslander60 from '../assets/fotos/ijslander-60.jpg';
import ijslander61 from '../assets/fotos/ijslander-61.jpg';

// List of images
const images = [
  ijslander1, ijslander2, ijslander3, ijslander4, ijslander5, ijslander6,
  ijslander7, ijslander8, ijslander9, ijslander10, ijslander11, ijslander12,
  ijslander13, ijslander14, ijslander15, ijslander16, ijslander17, ijslander18,
  ijslander19, ijslander20, ijslander21, ijslander22, ijslander23, ijslander24,
  ijslander25, ijslander26, ijslander27, ijslander28, ijslander29, ijslander30,
  ijslander31, ijslander32, ijslander33, ijslander34, ijslander35, ijslander36,
  ijslander37, ijslander38, ijslander39, ijslander40, ijslander41, ijslander42,
  ijslander43, ijslander44, ijslander45, ijslander46, ijslander47, ijslander48,
  ijslander49, ijslander50, ijslander51, ijslander52, ijslander53, ijslander54,
  ijslander55, ijslander56, ijslander57, ijslander58, ijslander59, ijslander60,
  ijslander61,
];


// Full width background for carousel
const CarouselBackground = styled.div`
  width: 100vw;
  background-color: #f5f0e6;  /* Beige background */
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

// Carousel container
const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

// Title with Lobster font
const Title = styled.h1`
  font-family: 'Lobster', cursive;
  font-size: 3rem;
  color: #ffcc00;
  text-align: center;
  margin-bottom: 20px;
`;

// Styled component for the main image
const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Thumbnails container
const ThumbnailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Styled component for each thumbnail
const Thumbnail = styled.img`
  width: 100px;
  height: 70px;
  border-radius: 5px;
  cursor: pointer;
  object-fit: cover;
  box-shadow: ${({ selected }) => (selected ? '0 0 10px 2px #ffcc00' : '0 4px 6px rgba(0, 0, 0, 0.1)')};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px 2px #ffcc00;
  }
`;

// Arrow buttons for navigation
const ArrowButton = styled.button`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  font-size: 1.5rem;

  ${({ left }) => (left ? 'left: -60px;' : 'right: -60px;')};

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    ${({ left }) => (left ? 'left: -30px;' : 'right: -30px;')};
  }
`;

const FotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to select a specific image from thumbnails
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselBackground>
      <CarouselContainer>
        <Title>Foto's</Title>

        <MainImageContainer>
          {/* Arrow buttons */}
          <ArrowButton left onClick={prevImage}>❮</ArrowButton>
          <MainImage src={images[currentIndex]} alt={`IJslander ${currentIndex + 1}`} />
          <ArrowButton onClick={nextImage}>❯</ArrowButton>
        </MainImageContainer>

        <ThumbnailsContainer>
          {images.map((img, index) => (
            <Thumbnail
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              selected={currentIndex === index}
            />
          ))}
        </ThumbnailsContainer>
      </CarouselContainer>
    </CarouselBackground>
  );
};

export default FotoCarousel;

