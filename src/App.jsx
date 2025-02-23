import { useState } from "react";
import "./App.css"; // Import the CSS file

function App() {
  // Stores input values from the user
  const [features, setFeatures] = useState({
    demand: "",
    stock: "",
    price: "",
    category: "",
  });
  
  // Stores value for dynamic price
  const [dynamicPrice, setDynamicPrice] = useState(null);

  // Updates feature state
  const handleChange = (event) => {
    setFeatures({ ...features, [event.target.name]: event.target.value });
  };

  // Returns price to the user based on inputs
  // Implement backend here
  const handlePricing = async () => {
    const calculatedPrice = Math.random() * 100; // Mock price calculation
    setDynamicPrice(calculatedPrice.toFixed(2));
  };

  //Placeholder text for form inputs
  const placeholders = {
    demand: "Number sold in past month",
    stock: "Number in stock",
    price: "Current price",
    category: "Product category"
  }

  //Display
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Dynamic Pricing Dashboard</h1>

        {/* Generates text input fields */}
        <div className="input-grid">
          {Object.keys(features).map((feature) => (
            <input
              key = {feature}
              type = "text"
              name = {feature}
              value = {features[feature]}
              onChange = {handleChange}
              placeholder = {placeholders[feature]}
              className = "input-field"
            />
          ))}
        </div>

        {/* Generates button */}
        <button className="button" onClick={handlePricing}>
          Get Dynamic Price
        </button>

        {/* Generates price recommendation result */}
        {dynamicPrice && (
          <div className="price-box">
            Recommended Price: <span>${dynamicPrice}</span>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;