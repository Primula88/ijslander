import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MapsWithExplanations from './components/MapsWithExplanations';
import ReviewGallery from './components/ReviewGallery';
import FotoCarousel from './components/FotoCarousel'; // Import FotoCarousel
import Impressions from './components/Impressions';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main route with the header and other sections */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <MapsWithExplanations />
              <ReviewGallery />
              <Impressions />
            </>
          }
        />
        {/* Add the route for FotoCarousel */}
        <Route path="/fotos" element={<FotoCarousel />} />
      </Routes>
    </Router>
  );
};

export default App;

