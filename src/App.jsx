import React, { useState } from "react";
import AllRoutes from "./allroutes/AllRoutes";
import FlashDealsData from "./components/FlashDeals/flashDealsData";
import ShopData from "./components/Shop/shopData";
import AllProductsData from "./components/Allproducts/allProductsData";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  // pulling data from data files & storing it in variables here
  const { productItems } = FlashDealsData;
  const { shopItems } = ShopData;
  const { allProductsData } = AllProductsData;
  // using useState hooks to change and store items in  the cart here
  const [cartItems, setCartItems] = useState([]);
 
  const addToCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, qty: productExists.qty + 1 }
            : item
        )
      );
      toast.success("Item quantity increased");
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      toast.success("Item added to cart");
    }
  };

  const deleteFromCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists.qty === 1) {
      const shouldRemove = window.confirm(
        "Are you sure you want to remove this item from the cart?"
      );

      if (shouldRemove) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
        toast.success("Item removed from cart");
      }
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, qty: productExists.qty - 1 }
            : item
        )
      );
      toast.success("Item quantity decreased");
    }
  };
  
  const checkOut = (cartItems) => {
 
    if (cartItems.length <= 0) {
      toast.error("Add an item in the cart to checkout");
    } else {
      const confirmOrder = window.confirm(
        "Are you sure you want to order all these products?"
      );

      if (confirmOrder) {
        // Clear the cart by setting it to a new array or an empty array
        setCartItems([]);
        toast.success("Order placed, Thanks!!");
      }
    }
  };


  const removeFromCart = (product) => {
    const shouldRemove = window.confirm(
      "Are you sure you want to remove this item from the cart?"
    );

    if (shouldRemove) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      toast.success("Item removed from cart");
    }
  };

  return (
    // All the functions are in App.jsx but we have to call these in other components as well so sending all these functions and datas as props to child elements so we can use them there
    <>
      <Toaster />
      <AllRoutes
        removeFromCart={removeFromCart}
        productItems={productItems}
        cartItems={cartItems}
        addToCart={addToCart}
        shopItems={shopItems}
        deleteFromCart={deleteFromCart}
        checkOut={checkOut}
        allProductsData={allProductsData}
      />
    </>
  );
}

export default App;
