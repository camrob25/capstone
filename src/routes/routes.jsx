import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CarRentalPage from '../pages/CarRentalPage';
import FindMyCar from '../pages/FindMyCar';
import CarPriceChart from '../pages/CarPriceChart';
import Home from '../pages/Home';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/car-rental" element={<CarRentalPage />} />
      <Route path="/find-car" element={<FindMyCar />} />
      <Route path="/bargraph" element={<CarPriceChart />} />
    </Routes>
  );
};

export default RoutesComponent;