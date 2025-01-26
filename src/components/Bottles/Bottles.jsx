import { useState, useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import PropTypes from 'prop-types'


const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handlePurchase = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <div>
      <h2>Available Bottles: {bottles.length}</h2>
      <h3>Cart: {cart.length}</h3>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handlePurchase={handlePurchase}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

Bottles.propTypes = {
  bottles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Bottles;
