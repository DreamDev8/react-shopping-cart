const Navbar = (props) => {
  function handleDarkMode() {
    props.setIsDarkMode(!props.isDarkMode);
  }

  const cartQuantity = props.cartItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  return (
    <header className={props.isDarkMode ? "dark-mode-black" : undefined}>
      <nav>
        <img
          className={props.isDarkMode ? "dark-mode-logo" : undefined}
          src="images/logo.svg"
          alt="logo"
        />
        <div className="nav-cart">
          <div onClick={handleDarkMode}>
            {props.isDarkMode ? (
              <img src="images/icon-sun.svg" alt="night/light-mode" />
            ) : (
              <img src="images/icon-moon-dark.svg" alt="night/light-mode" />
            )}
          </div>

          <div>
            <img
              onClick={props.onCartOpen}
              src="images/icon-cart.svg"
              alt="cart"
            />
            <span
              style={{
                background: props.isDarkMode && "#ff7bc7",
                color: props.isDarkMode && "#272935",
              }}
            >
              {cartQuantity}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
