import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/FindMyCar.css";

const cars = [
  { title: "Economy", category: "Economy", price: 64.09, description: "Mitsubishi Mirage", image: "/images/mirage.jpg", rating: 4.8, mpg: 39.5, seats: 5, reserveUrl: "https://www.enterprise.com/en/reserve.html#review" },
  { title: "Economy", category: "Economy", price: 46, description: "Chevrolet Spark", image: "/images/spark.jpg", rating: 4.8, mpg: 35, seats: 2, reserveUrl: "https://www.hertz.ca/rentacar/reservation/#extras" },
  { title: "Economy", category: "Economy", price: 61, description: "Hyundai Veloster", image: "/images/veloster.jpg", rating: 4.6, mpg: 30.5, seats: 2, reserveUrl: "https://www.thrifty.com/us/en/book/ancillaries/coverage" },
  { title: "Mid-size", category: "Mid-size", price: 62, description: "Chevrolet Cruze", image: "/images/cruze.jpg", rating: 4.8, mpg: 42.7, seats: 5, reserveUrl: "https://www.thrifty.com/us/en/book/ancillaries/coverage" },
  { title: "Luxury", category: "Luxury", price: 117, description: "Chrysler 300", image: "/images/chrystler.jpg", rating: 4.8, mpg: 24.5, seats: 5, reserveUrl: "https://www.thrifty.com/us/en/book/ancillaries/coverage" },
  { title: "Trucks", category: "Trucks", price: 63.99, description: "Toyota Tacoma", image: "/images/tacoma.jpg", rating: 4.7, mpg: 23, seats: 5, reserveUrl: "https://www.enterprise.com/en/reserve.html#extras" },
  {title: "Mid-size", category: "Mid-size", price: 46, description: "Mazda 3",  image: "./images/mazda.jpg", rating: 4.4, mpg: 31, zeroToSixty: 7.0, seats: 5, reserveUrl:"https://www.hertz.com/us/en/book/ancillaries/coverage?CDP=2278478&age=25&ddate=2025-02-05T12%3A00%3A00&did=SHVT11&pCountryCode=US&pdate=2025-02-04T12%3A00%3A00&pid=SHVT11&rateQuoteIds=VCPD1%7C7FZBJID2LG72050-41%7C5,RCUD1%7C7FZBJID2LG72050-41%7C6&sippCode=ICAR&travelType=LEISURE"},
  {title: "Mid-size", category: "Mid-size", price: 64.98, description: "Toyota Corolla", image: "./images/corolla.jpg", rating: 4.5, mpg: 35, zeroToSixty: 8.5, seats: 5, reservUrl:"https://www.enterprise.com/en/reserve.html#review"},
  {title: "Luxury", category: "Luxury", price: 149, description: "Audi A3 or similar", image: "./images/audi.jpg", rating: 4.8, mpg: 29, zeroToSixty: 5.3, seats: 5, reserveUrl:"https://www.enterprise.com/en/reserve.html#extras"},
  {title: "Full-size", category: "Full-size", price: 48, description: "Chevrolet Malibu",  image: "./images/malibu.jpg", rating: 4.9, mpg: 19, zeroToSixty: 4.0, seats: 4,reserveUrl:"https://www.hertz.com/us/en/book/ancillaries/coverage?CDP=2278478&age=25&ddate=2025-02-05T12%3A00%3A00&did=SHVT11&pCountryCode=US&pdate=2025-02-04T12%3A00%3A00&pid=SHVT11&rateQuoteIds=VCPD1%7C75D4HBIG1072089-41%7C9,RCUD1%7C75D4HBIG1072089-41%7C10&sippCode=FCAR&travelType=LEISURE"},
  {title: "Full-size", category: "Full-size", price: 66.98, description: "Toyota Camry", image: "./images/camry.jpg", rating: 4.9, mpg: 28, zeroToSixty: 4.2, seats: 4, reserveUrl:"https://www.enterprise.com/en/reserve.html#extras"},
  {title: "Mid-Size SUV", category: "Mid-Size SUV", price: 75.98, description: "Nissan Rogue", image: "./images/NissanRogue.jpg", rating: 4.9, mpg: 33.5, zeroToSixty: 4.0, seats: 4,reserveUrl:"https://www.hertz.com/us/en/book/ancillaries/coverage?CDP=2278478&age=25&ddate=2025-02-05T12%3A00%3A00&did=SHVT11&pCountryCode=US&pdate=2025-02-04T12%3A00%3A00&pid=SHVT11&rateQuoteIds=VCPD1%7CFP6LHIE20472110-41%7C14,RCUD1%7CFP6LHIE20472110-41%7C13&sippCode=IFAR&travelType=LEISURE"},
  {title: " Full-Size SUV", category: "Full-Size SUV", price: 126.80, description: "Chevrolet Tahoe or similar", image: "./images/tahoe.jpg", rating: 4.7, mpg: 18, zeroToSixty: 4.3, seats: 7, reserveUrl:"https://www.enterprise.com/en/reserve.html#extras"}
];

const FindMyCar = () => {
  const [groupSize, setGroupSize] = useState("1-2");
  const [purpose, setPurpose] = useState("business");
  const [budget, setBudget] = useState("economy");
  const [filteredCars, setFilteredCars] = useState([]);
  const navigate = useNavigate();

  const findCar = () => {
    let results = cars.filter(car => {
      if (purpose === "Moving" && car.category.toLowerCase().includes("trucks")) return true;
      if (budget === "economy" && car.category === "Economy") return true;
      if (budget === "mid" && car.category === "Mid-size") return true;
      if (budget === "luxury" && car.category.toLowerCase().includes("luxury")) return true;
      if (groupSize === "5+" && (car.category.includes("SUV") || car.category.includes("Full-size"))) return true;
      return false;
    });

    setFilteredCars(results);
  };

  return (
    <div className="container">
      <h1>Questionnaire</h1>
      <p>Answer a few questions to find the best vehicle for you!</p>

      <div className="question">
        <label>How many people are traveling?</label>
        <select value={groupSize} onChange={e => setGroupSize(e.target.value)}>
          <option value="1-2">1-2</option>
          <option value="3-4">3-4</option>
          <option value="5+">5 or more</option>
        </select>
      </div>

      <div className="question">
        <label>What is the purpose of your trip?</label>
        <select value={purpose} onChange={e => setPurpose(e.target.value)}>
          <option value="business">Business</option>
          <option value="leisure">Leisure</option>
          <option value="family">Family Trip</option>
          <option value="Moving">Moving/Towing</option>
        </select>
      </div>

      <div className="question">
        <label>What is your budget?</label>
        <select value={budget} onChange={e => setBudget(e.target.value)}>
          <option value="economy">Economy</option>
          <option value="mid">Mid-size</option>
          <option value="luxury">Luxury</option>
          <option value="Trucks">Trucks</option>
        </select>
      </div>

      <button onClick={findCar}>Find My Car</button>
      <button className="back-button" onClick={() => navigate("/car-rental")}>Go back to cars</button>

      <div id="result">
        {filteredCars.length > 0 ? (
          <>
            <h2>Recommended Cars:</h2>
            {filteredCars.map((car, index) => (
              <div key={index} className="car-card">
                <img src={car.image} alt={car.description} width="150" />
                <p>{car.description} - ${car.price}/day</p>
                <a href={car.reserveUrl} target="_blank" rel="noopener noreferrer">Reserve</a>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default FindMyCar;