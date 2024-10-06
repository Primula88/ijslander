import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import bgImage from '../assets/bg.webp';
import strandritBg from '../assets/strandrit.webp';
import airbnbBg from '../assets/airbnb.webp';
import fotoBg from '../assets/ijslander-4.webp';

// Wrapper for the header with a static background
const HeaderWrapper = styled.div`
  height: 100vh; /* Full screen height */
  width: 100vw;  /* Full screen width */
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow-y: auto; /* Enable scrolling on mobile */
  z-index: 0;
  margin: 0; /* Remove any margins */
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); /* Slight dark overlay for readability */
    z-index: 1; /* Overlay is above background */
  }

  @media (max-width: 768px) {
    height: auto; /* Allow height to adjust based on content */
    overflow-y: auto; /* Ensure scrolling if content overflows */
  }
`;

// Text container with more transparency and higher z-index
const TextContainer = styled.div`
  z-index: 2; /* Ensures this is on top */
  background: rgba(255, 255, 255, 0.2);  /* More transparency */
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
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  height: 150px;
  width: 250px;
  border-radius: 15px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border: none;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  z-index: 3;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Header = () => {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  const handleClick = (url) => {
    window.open(url, '_blank'); // Open external links in a new tab
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
      <ButtonContainer>
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
        {/* Add the new Foto's button that navigates to the FotoCarousel page */}
        <ButtonCard
          background={fotoBg} // You can add a relevant background for the photos
          onClick={() => navigate('/fotos')}
        >
          <span>Foto's</span>
        </ButtonCard>
      </ButtonContainer>
    </HeaderWrapper>
  );
};

export default Header;

