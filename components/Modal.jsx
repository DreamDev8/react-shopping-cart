function Modal(props) {
  return (
    <section>
      {props.isModalOpen && (
        <div className="modal-overlay">
          <div
            className="modal-main"
            style={{ background: props.isDarkMode && "#272935" }}
          >
            <div className="modal-flex">
              <div className="modal-flex-img">
                <img src={props.selectedProduct.img} alt="" />
              </div>
              <div className="modal-flex-text">
                <div>
                  <h3>{props.selectedProduct.title}</h3>
                  <div>
                    {props.isDarkMode ? (
                      <img
                        onClick={props.onModalClose}
                        src="images/icon-close-light.svg"
                        alt=""
                      />
                    ) : (
                      <img
                        onClick={props.onModalClose}
                        src="images/icon-close.svg"
                        alt=""
                      />
                    )}
                  </div>
                </div>
                <h4>${props.selectedProduct.price}</h4>
                <p>{props.selectedProduct.description}</p>
                <button
                  onClick={() => props.onAddToCart(props.selectedProduct)}
                  className="cta"
                  style={{ background: props.isDarkMode && "#ff7bc7" }}
                >
                  {props.cartItems.find(
                    (item) => item.id === props.selectedProduct.id
                  )
                    ? "Product is added to cart"
                    : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Modal;
