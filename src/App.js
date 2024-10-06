import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import RideInfoSection from './components/RideInfoSection';
import MapsWithExplanations from './components/MapsWithExplanations'; // For both summer and winter maps
import ReviewGallery from './components/ReviewGallery'; // Updated to use the new review gallery

const App = () => {
  return (
    <div>
      <Header /> {/* The welcoming header with the banner */}
      <MapsWithExplanations /> {/* Section with maps and explanations for summer and winter locations */}
      <ReviewGallery /> {/* Updated to the new review gallery with sliding functionality */}
      <AboutSection /> {/* About the manege, horses, and the team */}
      <RideInfoSection /> {/* Information about the rides, conditions, and requirements */}
    </div>
  );
};

export default App;

