function Products(props) {
  return (
    <section className="products-main">
      <h2 className="heading-border-bottom">Featured Products</h2>
      <div className="products-grid">
        {props.products.map((product, index) => {
          return (
            <div
              key={index}
              className="products-single"
              style={{ background: props.isDarkMode && "#272935" }}
            >
              <img
                onClick={() => props.onModalOpen(product)}
                src={product.img}
                alt=""
              />
              <h3>{product.title}</h3>
              <h4 className={props.isDarkMode ? "dark-mode-violet" : undefined}>
                ${product.price}
              </h4>
              <button
                className="cta"
                style={{
                  background: props.isDarkMode && "#ff7bc7",
                  color: props.isDarkMode && "#272935",
                }}
                onClick={() => props.onAddToCart(product)}
              >
                {props.cartItems.find((item) => item.id === product.id)
                  ? "Already in the cart"
                  : "Add to cart"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;