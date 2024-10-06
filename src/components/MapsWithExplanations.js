import React from 'react';
import styled from 'styled-components';

// Styled grid container for maps and explanations
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 40px;
  background-color: #f5f0e6;  // Beige-like background
  border-radius: 15px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  width: 100%;  // Ensure full width
  box-sizing: border-box;  // Include padding in the element’s width/height
  min-width: 0;  // Allows content to shrink as needed

  @media (max-width: 768px) {
    grid-template-columns: 1fr;  // Stack divs vertically on mobile
    width: 100% !important;  // Full width on mobile
    margin: 0 auto !important;  // Center the container
    padding: 20px;
    overflow-x: hidden;  // Prevent horizontal overflow
  }

  @media (max-width: 480px) {
    padding: 10px;  // Further reduce padding on very small screens
  }
`;

// Styled text container for explanation
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  // Center the text
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  padding: 20px;  // Padding inside text sections
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;  // Prevent long text from overflowing the container
`;

const Heading = styled.h1`
  font-family: 'Lobster', cursive;
  font-size: 3rem;
  color: #ffcc00;
  text-align: center;  // Center the title
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: #4b4b4b;
  text-align: center;  // Center the paragraph text
`;

// Styled iframe container for the maps
const IframeContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow: hidden;

  iframe {
    max-width: 100%;  // Ensure the iframe doesn't overflow
    height: auto;
  }
`;

const MapsWithExplanations = () => {
  return (
    <>
      <GridContainer>
        {/* Summer Map - Breeweg  */}
        <div>
          <Heading>Zomer Ritten - Breeweg</Heading>
          <IframeContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d318002.9473458055!2d3.536313!3d51.487563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c49774bebe95db%3A0x31197fc4e1ac1360!2sFGQP%2B2G%2C%20Koudekerke%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1728206673398!5m2!1sen!2sus"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Breeweg 2 - Zomer Locatie"  // Added title for accessibility
            ></iframe>
          </IframeContainer>
          <TextContainer>
            <Paragraph>
              De zomer ritten starten op <strong>Breeweg</strong>, slechts een blok verwijderd van de Manege De IJslander. De ritten brengen u door dezelfde prachtige omgeving zoals altijd, langs bossen, velden en stranden.
            </Paragraph>
            <Paragraph>
              Het enige verschil is de startlocatie, aangezien onze paarden in de zomer buiten staan. Dit biedt u een geweldige ritervaring in de Zeeuwse natuur.
            </Paragraph>
          </TextContainer>
        </div>

        {/* Winter Map - Koudekerkseweg 12 */}
        <div>
          <Heading>Winter Ritten - Koudekerkseweg 12</Heading>
          <IframeContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.2338180965407!2d3.527574487032114!3d51.49057659912235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c497bb219c09ef%3A0xde13271e6b95bff9!2sDe%20IJslander!5e0!3m2!1sen!2sus!4v1728206713585!5m2!1sen!2sus"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Koudekerkseweg 12 - Winter Locatie"  // Added title for accessibility
            ></iframe>
          </IframeContainer>
          <TextContainer>
            <Paragraph>
              Van <strong>oktober tot april</strong> starten de ritten vanaf <strong>Koudekerkseweg 12</strong>. Hoewel de omgeving hetzelfde blijft, is de startlocatie anders omdat onze paarden in de winter op stal staan.
            </Paragraph>
            <Paragraph>
              Geniet van dezelfde prachtige Zeeuwse natuur terwijl onze paarden en begeleiders voor u klaarstaan om u een onvergetelijke ervaring te bezorgen, ongeacht het seizoen.
            </Paragraph>
          </TextContainer>
        </div>
      </GridContainer>
    </>
  );
};

export default MapsWithExplanations;

