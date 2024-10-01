import { useState, useEffect } from "react";

function Carousel(props) {
  const [imageIndex, setImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function nextSlide() {
    setImageIndex(imageIndex >= props.slides.length - 1 ? 0 : imageIndex + 1);
  }

  function prevSlide() {
    setImageIndex(imageIndex <= 0 ? props.slides.length - 1 : imageIndex - 1);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log("worked");
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <section>
      <div className="carousel-slides">
        {props.slides.map((slide, index) => {
          return (
            <img
              key={index}
              className="carousel-img"
              src={slide.img}
              alt=""
              style={{
                translate:
                  windowWidth <= 480
                    ? `${-100 * imageIndex}%`
                    : `${-365 * imageIndex}px`,
                transition: "all 700ms linear",
              }}
            />
          );
        })}

        <button className="carousel-btns-prev" onClick={prevSlide}>
          <img src="images/icon-previous.svg" alt="" />
        </button>
        <button className="carousel-btns-next" onClick={nextSlide}>
          <img src="images/icon-next.svg" alt="" />
        </button>
      </div>

      <div></div>
    </section>
  );
}

export default Carousel;
