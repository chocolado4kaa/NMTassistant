import React, { useEffect, useRef, useState } from "react";
import "./Carousel.scss";
import Title from "../Title/Title";

const cards = [
  {
    title: "Математика",
    description: "Допомога в підготовці до математики.",
    className: "math",
    href: "/subjects/math",
  },
  {
    title: "Українська мова",
    description: "Повтор всього курсу української мови.",
    className: "ukraine",
    href: "/subjects/ukrainian",
  },
  {
    title: "Історія України",
    description: "Пригадай найваливіші дати країни.",
    className: "history",
    href: "/subjects/history",
  },
  {
    title: "Англійська мова",
    description: "підготуйся до НМТ з іноземної",
    className: "english",
    href: "/subjects/foreignLang",
  },
];

type CardProps = {
  title?: string;
  description?: string;
  className?: string;
  href?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  className = "",
  href = "#",
}) => {
  return (
    <div className="carousel-card">
      <div
        className={`${className} card-content w-full h-full flex relative flex-col justify-center`}
      >
        <div className="card-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="more">
          <a href={href}>читати далі</a>
        </div>
      </div>
    </div>
  );
};

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
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
      } else if (
        currentIndex === cards.length + 2 ||
        currentIndex === cards.length + 3
      ) {
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
    setCurrentIndex(index + 2);
    startAutoScroll();
  };

  const getTransform = () => `translateX(-${currentIndex * CARD_WIDTH}px)`;

  return (
    <section className="carousel-section">
      <Title>Знайди потрібний предмет</Title>
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
            <Card
              title={card.title}
              description={card.description}
              className={card.className}
              key={index}
              href={card.href}
            />
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
