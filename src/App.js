import React from 'react';
import Header from './components/Header';
import MapsWithExplanations from './components/MapsWithExplanations'; // For both summer and winter maps
import ReviewGallery from './components/ReviewGallery'; // Updated to use the new review gallery
import Impressions from './components/Impressions';

const App = () => {
  return (
    <div>
      <Header /> {/* The welcoming header with the banner */}
      <MapsWithExplanations /> {/* Section with maps and explanations for summer and winter locations */}
      <ReviewGallery /> {/* Updated to the new review gallery with sliding functionality */}
      <Impressions />
    </div>
  );
};

export default App;

