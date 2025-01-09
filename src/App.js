import React, { useState } from "react";

function App() {
  // State for toggling extra details
  const [cart, setCart] = useState([]);
  const [showDescription, setShowDescription] = useState({});

  // Sample grocery list with added descriptions
  const groceries = [
    {
      id: 1,
      name: "Apple",
      price: 2.5,
      description: "Fresh and sweet apples.",
    },
    {
      id: 2,
      name: "Banana",
      price: 1.2,
      description: "Ripe bananas rich in potassium.",
    },
    {
      id: 3,
      name: "Carrot",
      price: 0.9,
      description: "Crunchy carrots, great for snacks.",
    },
    {
      id: 4,
      name: "Tomato",
      price: 1.5,
      description: "Fresh, juicy tomatoes.",
    },
    {
      id: 5,
      name: "Broccoli",
      price: 2.0,
      description: "Healthy broccoli for a balanced diet.",
    },
    {
      id: 6,
      name: "Lettuce",
      price: 1.1,
      description: "Crisp lettuce for salads.",
    },
    {
      id: 7,
      name: "Grapes",
      price: 3.0,
      description: "Sweet and juicy grapes, perfect for snacking.",
    },
    {
      id: 8,
      name: "Cucumber",
      price: 1.3,
      description: "Cool and refreshing cucumbers.",
    },
  ];

  // Sample meat list with descriptions
  const meats = [
    {
      id: 9,
      name: "Chicken Breast",
      price: 5.5,
      description: "Boneless, skinless chicken breast.",
    },
    {
      id: 10,
      name: "Beef Steak",
      price: 8.0,
      description: "Juicy, tender beef steak.",
    },
    {
      id: 11,
      name: "Pork Ribs",
      price: 7.5,
      description: "Succulent pork ribs with a savory taste.",
    },
    {
      id: 12,
      name: "Salmon Fillet",
      price: 9.0,
      description: "Fresh and nutritious salmon fillet.",
    },
  ];

  // Add item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Remove item from the cart
  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };

  // Toggle description visibility
  const toggleDescription = (id) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Calculate total price
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-4xl p-4">
        {/* Title Bar */}
        <header className="bg-blue-600 text-white text-center py-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">Grocery Store</h1>
        </header>

        {/* Grocery List Section */}
        <div className="mt-8 space-y-6">
          {/* Grocery Section */}
          <section className="border-4 border-red-500 rounded-lg p-4">
            <h2 className="text-xl text-red-500 font-semibold text-center mb-4">
              Grocery List
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {groceries.map((grocery) => (
                <li
                  key={grocery.id}
                  className="flex justify-between items-center mb-4 p-4 border-2 rounded-lg shadow-lg"
                  style={{
                    backgroundColor:
                      grocery.id % 2 === 0 ? "#E8F5E9" : "#FFEBEE", // Alternating background colors
                    borderColor: grocery.id % 2 === 0 ? "#81C784" : "#EF5350", // Different border colors
                  }}
                >
                  <div className="flex flex-col space-y-2 w-full">
                    <span className="font-semibold text-lg">
                      {grocery.name}
                    </span>
                    <span className="text-gray-600 text-sm">
                      ${grocery.price}
                    </span>
                    {showDescription[grocery.id] && (
                      <div className="mt-2 text-gray-600 text-sm">
                        {grocery.description}
                      </div>
                    )}
                    <div className="flex justify-between items-center mt-4">
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
                        onClick={() => addToCart(grocery)}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md ml-2"
                        onClick={() => toggleDescription(grocery.id)}
                      >
                        {showDescription[grocery.id]
                          ? "Hide Description"
                          : "Show Description"}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Meat Section */}
          <section className="border-4 border-yellow-500 rounded-lg p-4">
            <h2 className="text-xl text-yellow-500 font-semibold text-center mb-4">
              Meat Selection
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {meats.map((meat) => (
                <li
                  key={meat.id}
                  className="flex justify-between items-center mb-4 p-4 border-2 rounded-lg shadow-lg"
                  style={{
                    backgroundColor: meat.id % 2 === 0 ? "#FFF9C4" : "#FFECB3", // Alternating background colors
                    borderColor: meat.id % 2 === 0 ? "#FFEB3B" : "#FF9800", // Different border colors
                  }}
                >
                  <div className="flex flex-col space-y-2 w-full">
                    <span className="font-semibold text-lg">{meat.name}</span>
                    <span className="text-gray-600 text-sm">${meat.price}</span>
                    {showDescription[meat.id] && (
                      <div className="mt-2 text-gray-600 text-sm">
                        {meat.description}
                      </div>
                    )}
                    <div className="flex justify-between items-center mt-4">
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
                        onClick={() => addToCart(meat)}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md ml-2"
                        onClick={() => toggleDescription(meat.id)}
                      >
                        {showDescription[meat.id]
                          ? "Hide Description"
                          : "Show Description"}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Cart Section */}
          <section className="border-4 border-blue-500 rounded-lg p-4 mt-8">
            <h2 className="text-xl text-blue-500 font-semibold text-center mb-4">
              Your Cart
            </h2>
            {cart.length === 0 ? (
              <p className="text-center text-gray-700">Your cart is empty!</p>
            ) : (
              <ul className="list-disc list-inside text-gray-700">
                {cart.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center mb-2"
                  >
                    <span>
                      {item.name} - ${item.price}
                    </span>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex justify-between items-center mt-4">
              <h3 className="text-lg font-semibold">Total: ${getTotal()}</h3>
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
                onClick={() => alert("Proceeding to checkout")}
              >
                Checkout
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
