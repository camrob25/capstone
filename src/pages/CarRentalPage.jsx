import React, { useState, useEffect } from 'react';
import '../assets/css/CarRentalPage.css'; 
import CNavBar from '../components/CNavBar';

const cars = [
  // Economy
  { id: 1, title: "Economy", category: "Economy", price: 64.09, description: "Mitsubishi Mirage", company:"Enterprise", image: "./images/mirage.jpg", rating: 4.8, mpg: 39.5, seats: 5,reserveUrl:"https://www.enterprise.com/en/reserve.html#review"},
  { id: 2, title: "Economy", category: "Economy", price: 46, description: "Chevrolet Spark",company:"Hertz",  image: "./images/spark.jpg", rating: 4.8, mpg: 35, seats:4,reserveUrl:"https://www.hertz.ca/rentacar/reservation/#extras"},
  { id: 3, title: "Economy", category: "Economy", price: 61, description: "Hyundai Veloster", company:"Thrifty", image: "./images/veloster.jpg", rating: 4.6, mpg: 30.5, zeroToSixty: 6.2, seats:4,reserveUrl:"https://www.thrifty.com/us/en/book/ancillaries/coverage?ddate=2025-03-05T13%3A00%3A00&did=SHV&pCountryCode=US&pdate=2025-02-03T12%3A00%3A00&pid=SHV"},

  // Midsize
  { id: 4, title: "Mid-size", category: "Mid-size", price: 61, description: "Chevrolet Cruze",company:"Thrifty",  image: "./images/cruze.jpg", rating: 4.8, mpg: 42.7, zeroToSixty: 6.0, seats: 5, reserveUrl:"https://www.thrifty.com/us/en/book/ancillaries/coverage"},
  { id: 5, title: "Mid-size", category: "Mid-size", price: 46, description: "Mazda 3", company:"Hertz",  image: "./images/mazda.jpg", rating: 4.4, mpg: 31, zeroToSixty: 7.0, seats: 5, reserveUrl:"https://www.hertz.com/us/en/book/ancillaries/coverage"},
  { id: 6, title: "Mid-size", category: "Mid-size", price: 64.98, description: "Toyota Corolla",company:"Enterprise",  image: "./images/corolla.jpg", rating: 4.5, mpg: 35, zeroToSixty: 8.5, seats: 5, reserveUrl:"https://www.enterprise.com/en/reserve.html#review"},

  // Luxury
  { id: 7, title: "Luxury", category: "Luxury", price: 117, description: "Chrysler 300", company:"Thrifty", image: "./images/chrystler.jpg", rating: 4.8, mpg: 24.5, zeroToSixty: 5.8, seats: 5, reserveUrl:"https://www.thrifty.com/us/en/book/ancillaries/coverage"},
  { id: 8, title: "Luxury", category: "Luxury", price: 149, description: "Audi A3", company:"Enterprise", image: "./images/audi.jpg", rating: 4.8, mpg: 29, zeroToSixty: 5.3, seats: 5, reserveUrl:"https://www.enterprise.com/en/reserve.html#extras"},

  // Full-size
  { id: 9, title: "Full-size", category: "Full-size", price: 56, description: "Kia Optima", company:"Thrifty", image: "./images/kia.jpg", rating: 4.7, mpg: 27, zeroToSixty: 4.3, seats: 5, reserveUrl:"https://www.thrifty.com/us/en/book/ancillaries/coverage"},
  { id: 10, title: "Full-size", category: "Full-size", price: 48, description: "Chevrolet Malibu",company:"Hertz",  image: "./images/malibu.jpg", rating: 4.9, mpg: 19, zeroToSixty: 4.0, seats: 4,reserveUrl:"https://www.hertz.com/us/en/book/ancillaries/coverage"},
  { id: 11, title: "Full-size", category: "Full-size", price: 66.98, description: "Toyota Camry",company:"Enterprise",  image: "./images/camry.jpg", rating: 4.9, mpg: 28, zeroToSixty: 4.2, seats: 4, reserveUrl:"https://www.enterprise.com/en/reserve.html#extras"},

  // Mid-Size SUV
  { id: 12, title: "Mid-Size SUV", category: "Mid-Size SUV", price: 71, description: "Jeep Compass",company:"Thrifty",  image: "./images/jeepCompass.jpg", rating: 4.7, mpg: 27, zeroToSixty: 4.3, seats: 5,reserveUrl:"https://www.thrifty.com/us/en/book/ancillaries/coverage"},
  { id: 13, title: "Mid-Size SUV", category: "Mid-Size SUV", price: 75.98, description: "Nissan Rogue",company:"Hertz",  image: "./images/NissanRogue.jpg", rating: 4.9, mpg: 33.5, zeroToSixty: 4.0, seats: 4,reserveUrl:"https://www.hertz.com/us/en/book/ancillaries/coverage"},

  // Full-Size SUV
  { id: 14, title: "Full-Size SUV", category: "Full-Size SUV", price: 126.80, description: "Chevrolet Tahoe",company:"Enterprise",  image: "./images/tahoe.jpg", rating: 4.7, mpg: 18, zeroToSixty: 4.3, seats: 7, reserveUrl:"https://www.enterprise.com/en/reserve.html#extras"},

  // Trucks
  { id: 15, title: "Trucks", category: "Trucks", price: 63.99, description: "Toyota Tacoma",company:"Enterprise",  image: "./images/tacoma.jpg", rating: 4.7, mpg: 23, zeroToSixty: 4.3, seats: 5, reserveUrl:"https://www.enterprise.com/en/reserve.html#extras"}
];

    const CarRentalPage = () => {
      const [filteredCars, setFilteredCars] = useState(cars);
      const [searchQuery, setSearchQuery] = useState('');
      const [selectedCategory, setSelectedCategory] = useState('');
      const [sortOrder, setSortOrder] = useState('price_lohi');
    
      useEffect(() => {
        filterCars();
      }, [searchQuery, selectedCategory, sortOrder]);
    
  const getStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = (rating % 1) >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    let stars = '';
    for (let i = 0; i < fullStars; i++) {
      stars += '★';
    }
    for (let i = 0; i < halfStar; i++) {
      stars += '☆';
    }
    for (let i = 0; i < emptyStars; i++) {
      stars += '☆';
    }
    return stars;
  };

  const reserveCar = (reserveUrl) => {
    window.location.href = reserveUrl;
  };

  const filterCars = () => {
    let filteredCars = cars;

    if (searchQuery) {
      filteredCars = filteredCars.filter(car => car.description.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (selectedCategory) {
      filteredCars = filteredCars.filter(car => car.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (sortOrder === 'price_lohi') {
      filteredCars.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price_highlo') {
      filteredCars.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'rating') {
      filteredCars.sort((a, b) => b.rating - a.rating);
    }

    setFilteredCars(filteredCars);
  };

  return (
    <div>
      <div className="Cnavbar">
      <CNavBar />
      </div>

      <div className="container my-4">
        <div className="filter-container">
          <select className="form-select" id="car-category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Select Car Category</option>
            <option value="economy">Economy</option>
            <option value="luxury">Luxury</option>
            <option value="Mid-size SUV">Mid-size SUV</option>
            <option value="Full-size SUV">Full-size SUV</option>
            <option value="Mid-size">Mid-size</option>
            <option value="Full-size">Full-size</option>
            <option value="Trucks">Trucks</option>
          </select>

          <select className="form-select" id="sort-order" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="price_lohi">Price: Low to High</option>
            <option value="price_highlo">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>

          <div className="search-container">
            <input type="text" className="form-control" id="search-car" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for a car..." />
          </div>
        </div>

        <div className="row" id="car-list">
          {filteredCars.map(car => (
            <div className="col-lg-4 col-md-6 col-sm-12 car-card" key={car.title} data-category={car.category}>
              <img src={car.image} alt={car.title} />
              <div className="card-body">
                <h5 className="card-title">{car.title}</h5>
                <p className="card-text">{car.description}</p>
                <p className="card-text">({car.company})</p>
                <div className="price">${car.price}/day</div>
                <div className="seats">👤{car.seats}</div>
                <div className="ratings">{getStarRating(car.rating)}</div>
                <div>
                  <button className="reserve-button" onClick={() => reserveCar(car.reserveUrl)}>Reserve</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="Cfooter">
        <p>&copy; 2025 Voyage. All Rights Reserved.</p>
        <p><a href="#">Policy</a> | <a href="#">Terms of Service</a></p>
      </footer>
    </div>
  );
};

export default CarRentalPage;