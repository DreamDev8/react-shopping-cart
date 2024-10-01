function Cart(props) {
  function cartClose() {
    props.setIsCartShown(false);
  }

  const productsPrice = props.cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const shipping = 5;

  const discount =
    productsPrice + shipping - (productsPrice + shipping) * (10 / 100);

  return (
    <aside
      className={props.isCartShown ? "show-cart cart-main" : "cart-main"}
      style={{ background: props.isDarkMode && "#272935" }}
    >
      <div className="cart-heading">
        <h2>Shopping Cart</h2>
        <div>
          {props.isDarkMode ? (
            <img onClick={cartClose} src="images/icon-close-light.svg" alt="" />
          ) : (
            <img onClick={cartClose} src="images/icon-close.svg" alt="" />
          )}
        </div>
      </div>
      {props.cartItems.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <div className="cart-main-content">
          <div className="cart-products-all">
            {props.cartItems.map((item, index) => {
              return (
                <div key={index} className="cart-product">
                  <div className="cart-product-info">
                    <img src={item.img} alt="" />
                    <h3 className="cart-title">{item.title}</h3>
                    <div className="cart-amount">
                      <h3>
                        Amount: <span>{item.quantity}</span>
                      </h3>
                      <div>
                        <button
                          style={{
                            background: props.isDarkMode && "#ff7bc7",
                            color: props.isDarkMode && "#272935",
                          }}
                          onClick={() => props.onDecreaseQty(item)}
                        >
                          -
                        </button>
                        <button
                          style={{
                            background: props.isDarkMode && "#ff7bc7",
                            color: props.isDarkMode && "#272935",
                          }}
                          onClick={() => props.onIncreaseQty(item)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        style={{ color: props.isDarkMode && "#ff7bc7" }}
                        onClick={() => props.onRemoveFromCart(item)}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                  <h3>
                    ${parseFloat((item.price * item.quantity).toFixed(2))}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="cart-price-total">
            <div
              className="cart-price-total-1"
              style={{ background: props.isDarkMode && "#191921" }}
            >
              <div className="cart-subtotal">
                <div>
                  <h3>Subtotal</h3>
                  <h4>${parseFloat(productsPrice.toFixed(2))}</h4>
                </div>
                <div>
                  <h3>Shipping</h3>
                  <h4>${parseFloat(shipping.toFixed(2))}</h4>
                </div>
              </div>
              <div className="cart-total">
                <h3>Order Total</h3>
                <h4>{parseFloat((productsPrice + shipping).toFixed(2))}</h4>
              </div>
              {parseFloat((productsPrice + shipping).toFixed(2)) > 300 && (
                <div className="cart-total">
                  <h3>Order Total with 10% Discount</h3>
                  <h4>{parseFloat(discount.toFixed(2))}</h4>
                </div>
              )}
            </div>
            <div>
              <p>* for order over $300, you get 10% discount</p>
            </div>
            <button
              style={{
                background: props.isDarkMode && "#ff7bc7",
                color: props.isDarkMode && "#272935",
              }}
              className="cart-price-total-2"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Cart;
