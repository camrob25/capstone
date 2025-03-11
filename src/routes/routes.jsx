import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarRentalPage from '../pages/CarRentalPage';
import FindMyCar from '../pages/FindMyCar';
import CarPriceChart from '../pages/CarPriceChart';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/car-rental" element={<CarRentalPage />} />
      <Route path="/find-car" element={<FindMyCar />} />
      <Route path="/bargraph" element={<CarPriceChart />} />
    </Routes>
  );
};

export default RoutesComponent;