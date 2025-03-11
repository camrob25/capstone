import React from 'react';
import './App.css';
import BNavbar from './components/BNavBar';
import Body from './components/Body';  
import RoutesComponent from './routes/routes';
import Bfooter from './components/Bfooter'; 

const App = () => {
  return (
    <div className="App">
      <BNavbar />
      <Body />
      <Bfooter />  
      <RoutesComponent /> 
    </div>
  );
};

export default App;
