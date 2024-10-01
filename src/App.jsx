import { useState } from "react";
import productsData from "./data";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Products from "../components/Products";
import Cart from "../components/Cart";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

const App = () => {
  const [products, setProducts] = useState(productsData);
  const [cartItems, setCartItems] = useState([]);
  const [isCartShown, setIsCartShown] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function cartOpen() {
    setIsCartShown(true);
  }

  function addToCart(product) {
    const isInTheCart = cartItems.find((item) => {
      return product.id === item.id;
    });

    if (isInTheCart) {
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, product]);
    }
  }

  function removeFromCart(product) {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => {
        return product.id !== item.id;
      });
    });
  }

  function increaseQty(product) {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        return product.id === item.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    });
  }

  function decreaseQty(product) {
    const singleQty = cartItems.find((item) => {
      return product.id === item.id;
    });

    if (singleQty.quantity === 1) {
      setCartItems((prevItems) => {
        return prevItems.filter((x) => {
          return product.id !== x.id;
        });
      });
    } else {
      setCartItems((prevItems) => {
        return prevItems.map((item) => {
          return product.id === item.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        });
      });
    }
  }

  function modalOpen(product) {
    const modalOpened = products.find((item) => {
      return product.id === item.id;
    });

    setSelectedProduct(modalOpened);
    setIsModalOpen(true);

    //if id that's clicked on in the modal, already is in the cart, don't add it
  }

  function modalClose() {
    setIsModalOpen(false);
  }

  return (
    <div className={isDarkMode ? "dark-mode-grey dark-mode-white2" : undefined}>
      <Navbar
        cartItems={cartItems}
        onCartOpen={cartOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <main>
        <section className="hero-wrapper">
          <Hero />
          <Carousel slides={products} />
        </section>
        <Products
          products={products}
          cartItems={cartItems}
          onAddToCart={addToCart}
          onModalOpen={modalOpen}
          isDarkMode={isDarkMode}
        />
        <Cart
          cartItems={cartItems}
          isCartShown={isCartShown}
          setIsCartShown={setIsCartShown}
          onIncreaseQty={increaseQty}
          onDecreaseQty={decreaseQty}
          onRemoveFromCart={removeFromCart}
          isDarkMode={isDarkMode}
        />
        <Modal
          products={products}
          selectedProduct={selectedProduct}
          onModalClose={modalClose}
          isModalOpen={isModalOpen}
          onAddToCart={addToCart}
          cartItems={cartItems}
          isDarkMode={isDarkMode}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
