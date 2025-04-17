import React, { useEffect, useRef, useState } from "react";
import "./Carousel.scss";

const cards = [
  { title: "Card 1", description: "Description 1" },
  { title: "Card 2", description: "Description 2" },
  { title: "Card 3", description: "Description 3" },
  { title: "Card 4", description: "Description 4" },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // починаємо з 1, бо перед ним буде клон останнього
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const CARD_WIDTH = 630;

  const fullCards = [
    cards[cards.length - 2],
    cards[cards.length - 1],
    ...cards,
    cards[0],
    cards[1],
  ];
  

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex === 0 || currentIndex === 1) {
        setIsTransitioning(false);
        setCurrentIndex(cards.length + 2);
      } else if (currentIndex === cards.length + 2 || currentIndex === cards.length + 3) {
        setIsTransitioning(false);
        setCurrentIndex(2);
      }
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener("transitionend", handleTransitionEnd);
    }

    return () => {
      if (track) {
        track.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
  }, [currentIndex]);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const goToSlide = (index: number) => {
    stopAutoScroll();
    setIsTransitioning(true);
    setCurrentIndex(index + 2); // зсув через клон спереду
    startAutoScroll();
  };

  const getTransform = () => `translateX(-${currentIndex * CARD_WIDTH}px)`;

  return (
    <section className="carousel-section">

      <div className="carousel-container">
        <div
          className="carousel-track"
          ref={trackRef}
          style={{
            transform: getTransform(),
            transition: isTransitioning ? "transform 2s ease-in-out" : "none",
          }}
        >
          {fullCards.map((card, index) => (
            <div className="carousel-card" key={index}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {cards.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index + 2 ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
            
    </section>
  );
};

export default Carousel;
