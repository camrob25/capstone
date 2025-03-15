import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import '../assets/css/CarPriceChart.css';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CarPriceChart = () => {
  const navigate = useNavigate();

  // Prepare data for the chart
  const cars = [
    { title: "Economy", price: { Thrifty: 63, Enterprise: 64.08, Hertz: 46 } },
    { title: "Luxury", price: { Enterprise: 149, Thrifty: 117 } },
    { title: "Mid-size", price: { Thrifty: 61, Enterprise: 64.98, Hertz: 46 } },
    { title: "Full-size", price: { Thrifty: 55, Enterprise: 66.09, Hertz: 48 } },
    { title: "Mid-size SUV", price: { Thrifty: 71, Hertz: 75.98 } },
    { title: "Full-size SUV", price: { Enterprise: 126.8 } },
    { title: "Trucks", price: { Enterprise: 63.99 } },
  ];

  const carLabels = cars.map((car) => car.title);
  const priceThrifty = cars.map((car) => car.price.Thrifty || 0);
  const priceEnterprise = cars.map((car) => car.price.Enterprise || 0);
  const priceHertz = cars.map((car) => car.price.Hertz || 0);

  const data = {
    labels: carLabels,
    datasets: [
      {
        label: "Thrifty",
        data: priceThrifty,
        backgroundColor: "rgba(52, 152, 219, 0.6)",
        borderColor: "rgba(52, 152, 219, 1)",
        borderWidth: 1,
      },
      {
        label: "Enterprise",
        data: priceEnterprise,
        backgroundColor: "rgba(46, 204, 113, 0.6)",
        borderColor: "rgba(46, 204, 113, 1)",
        borderWidth: 1,
      },
      {
        label: "Hertz",
        data: priceHertz,
        backgroundColor: "rgba(241, 196, 15, 0.6)",
        borderColor: "rgba(241, 196, 15, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="text-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold">Car Prices</h1>
      <p>Compare Prices across rental companies in $USD.</p>
      <div className="container mt-6">
        {/* Render Bar chart using react-chartjs-2 */}
        <Bar data={data} options={options} />
      </div>
      <div className="mt-4 space-x-4">
      <button className="back-button" onClick={() => navigate("/car-rental")}>Go back to cars</button>
      </div>
    </div>
  );
};

export default CarPriceChart;
