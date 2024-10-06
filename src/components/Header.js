// src/components/Header.js
import React from 'react';
import { styled } from 'styled-components';
import bgImage from '../assets/bg.webp';
import strandritBg from '../assets/strandrit.webp';
import airbnbBg from '../assets/airbnb.webp';

// Wrapper for the header with a static background
const HeaderWrapper = styled.div`
  height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 0; /* Background stays behind */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); // Slight dark overlay for readability
    z-index: 1; /* Overlay is above background */
  }
`;

// Text container with more transparency and higher z-index
const TextContainer = styled.div`
  z-index: 2; /* Ensures this is on top */
  background: rgba(255, 255, 255, 0.2);  // More transparency
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  h1 {
    font-family: 'Lobster', cursive;
    font-size: 3rem;
    color: #ffcc00;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 20px;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

// Card-styled button, using onClick for navigation, ensuring higher z-index for clickability
const ButtonCard = styled.button`
  background-image: url(${(props) => props.background});  // Correct use of styled-components prop
  background-size: cover;
  background-position: center;
  height: 150px;
  width: 250px;
  border-radius: 15px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;  // Align text to the bottom
  justify-content: center;
  text-decoration: none;  // Removes underline for link text
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border: none;  // Removes default button styles
  color: white;
  z-index: 3; /* Ensures button is on top */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  }

  span {
    position: relative;
    z-index: 4; /* Ensures text is on top */
    color: white;
    font-size: 1.4rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    height: 120px;
    width: 200px;
    span {
      font-size: 1.2rem;
    }
  }
`;

const Header = () => {
  const handleClick = (url) => {
    window.open(url, '_blank'); // Open the link in a new tab
  };

  return (
    <HeaderWrapper>
      <TextContainer>
        <h1>Welkom bij Manege De IJslander</h1>
        <p>
          Met liefde hebben wij deze pagina voor u gemaakt om u een kleine indruk te geven van wat ik 
          (Rozemarijn Ideler, Eigenaresse) en mijn team voor u kunnen verzorgen. Geniet van een fantastische 
          rit door de Zeeuwsche akkers, bos, duinen en strand.
        </p>
      </TextContainer>
      {/* Ensuring buttons are in front */}
      <div className="flex justify-center space-x-4 mt-6 z-3">
        <ButtonCard
          background={strandritBg}
          onClick={() => handleClick('https://www.deijslander.nl/strandrit-boeken/')}
        >
          <span>Strandrit Boeken</span>
        </ButtonCard>
        <ButtonCard
          background={airbnbBg}
          onClick={() => handleClick('https://www.airbnb.nl/rooms/18662460')}
        >
          <span>AirBNB</span>
        </ButtonCard>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

