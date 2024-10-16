import React, { useState } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector to access the cart items in the store
import { addItem } from "./CartSlice"; // Import addItem from CartSlice for adding items to the cart

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(true); // Default to show the plant listing page
  const [addedToCart, setAddedToCart] = useState({});

  // Access cart from Redux store to calculate total items in cart
  const cart = useSelector((state) => state.cart.items);
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  const dispatch = useDispatch(); // Initialize useDispatch for dispatching actions

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true, // Set the product name as key and value as true to indicate it's added to cart
    }));
  };

  // Function to show the cart
  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true); // Set showCart to true when cart icon is clicked
    setShowPlants(false); // Hide the product listing when cart is displayed
  };

  // Function to show the product listing (Continue Shopping)
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true); // Set showPlants to true when "Plants" link is clicked
    setShowCart(false); // Hide the cart when navigating to product listing
  };

  // Function to continue shopping by hiding the cart and showing the product listing again
  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
    setShowPlants(true);
  };

  // Array of plant categories and details
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image:
            "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image:
            "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12",
        },
        {
          name: "Peace Lily",
          image:
            "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and purifies the air.",
          cost: "$18",
        },
        {
          name: "Boston Fern",
          image:
            "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description: "Adds humidity to the air and removes toxins.",
          cost: "$20",
        },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image:
            "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20",
        },
        {
          name: "Jasmine",
          image:
            "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18",
        },
        {
          name: "Rosemary",
          image:
            "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          description: "Invigorating scent, often used in cooking.",
          cost: "$15",
        },
        {
          name: "Mint",
          image:
            "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
          description: "Refreshing aroma, used in teas and cooking.",
          cost: "$12",
        },
      ],
    },
  ];

  // Style objects
  const styleObj = {
    backgroundColor: "#4CAF50",
    color: "#fff!important",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignIems: "center",
    fontSize: "20px",
  };
  const styleObjUl = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "1100px",
  };
  const styleA = {
    color: "white",
    fontSize: "30px",
    textDecoration: "none",
  };

  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt=""
            />
            <a href="/" style={{ textDecoration: "none" }}>
              <div>
                <h3 style={{ color: "white" }}>Paradise Nursery</h3>
                <i style={{ color: "white" }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div>
            <a href="#" onClick={handlePlantsClick} style={styleA}>
              Plants
            </a>
          </div>
          <div>
            <a href="#" onClick={handleCartClick} style={styleA}>
              <h1 className="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="68"
                  width="68"
                >
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>
                {/* Display the total number of items in the cart */}
                {totalItemsInCart > 0 && (
                  <span className="cart-count">{totalItemsInCart}</span>
                )}
              </h1>
            </a>
          </div>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1>{category.category}</h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                    />
                    <div className="product-title">{plant.name}</div>
                    <div>{plant.description}</div>
                    <div>{plant.cost}</div>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]} // Disable button if added to cart
                    >
                      {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
