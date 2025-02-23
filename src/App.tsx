import { useState } from "react";
import "./App.css"; // Import the CSS file

interface Features {
    demand: string;
    stock: string;
    price: string;
    category: string;
}
function App() {
  // Stores input values from the user
  const [features, setFeatures] = useState<Features>({
    demand: "",
    stock: "",
    price: "",
    category: "",
  });
  
  // Stores value for dynamic price
  const [dynamicPrice, setDynamicPrice] = useState<string|null>(null);

  // Updates feature state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeatures({ ...features, [event.target.name]: event.target.value });
  };

  // Returns price to the user based on inputs
  // Implement backend here
  const handlePricing = async (): Promise<void> => {
    const calculatedPrice: number = Math.random() * 100; // Mock price calculation
    setDynamicPrice(calculatedPrice.toFixed(2));
  };

  //Placeholder text for form inputs
  const placeholders: Features = {
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
              value = {features[feature as keyof Features]}
              onChange = {handleChange}
              placeholder = {placeholders[feature as keyof Features]}
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