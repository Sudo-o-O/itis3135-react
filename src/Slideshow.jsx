import { useEffect, useState, useRef } from "react";

function Slideshow() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  const firstSlide = () => {
    setCurrentIndex(0);
  };

  const lastSlide = () => {
    setCurrentIndex(images.length - 1);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? images.length - 1 : prevIndex + 1,
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const playSlideshow = () => {
    setIsPlaying(true);
  };

  const stopSlideshow = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying && images.length > 0) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
      }, 5000);
    }

    return () => clearInterval(timerRef.current);
  }, [isPlaying, images]);

  if (images.length === 0) {
    return (
      <main>
        <h2>React Cat Slideshow</h2>
        <p>Loading images...</p>
      </main>
    );
  }

  return (
    <main>
      <h2>React Cat Slideshow</h2>

      <section className="slideshow">
        <img
          src={images[currentIndex].url}
          alt={`Cat slide ${currentIndex + 1}`}
          className="slideshow-image"
        />

        <p>
          Slide {currentIndex + 1} of {images.length}
        </p>

        <div className="slideshow-buttons">
          <button onClick={firstSlide}>First</button>
          <button onClick={previousSlide}>Previous</button>
          <button onClick={playSlideshow}>Play</button>
          <button onClick={stopSlideshow}>Stop</button>
          <button onClick={nextSlide}>Next</button>
          <button onClick={lastSlide}>End</button>
        </div>
      </section>
    </main>
  );
}

export default Slideshow;
