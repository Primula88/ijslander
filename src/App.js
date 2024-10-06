import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import RideInfoSection from './components/RideInfoSection';
import MapsWithExplanations from './components/MapsWithExplanations'; // Updated to include both maps
import ReviewComponent from './components/ReviewComponent';

const App = () => {
  return (
    <div>
      <Header />
      <MapsWithExplanations /> 
      <ReviewComponent />
      <AboutSection />
      <RideInfoSection />
    </div>
  );
};

export default App;

