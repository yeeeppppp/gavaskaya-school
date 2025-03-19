import React, { useState } from 'react';
import './Carousel.css';

// Импортируем изображения явно
import subaru from '../../assets/img/bmw.jpg';
import camry from '../../assets/img/camry.jpg';
import honda from '../../assets/img/zaz.jpg';

import nextButton from '../../assets/img/next-btn.svg'
import prewButton from '../../assets/img/prew-btn.svg'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cars = [
    {
      title: 'Subaru Forester',
      image: subaru,
      description: 'Полный привод, 2.5L двигатель'
    },
    {
      title: 'Toyota Camry',
      image: camry,
      description: 'Передний привод, 2.4L двигатель'
    },
    {
      title: 'Honda CR-V',
      image: honda,
      description: 'Гибридная версия, экономичный расход'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cars.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cars.length - 1 : prev - 1));
  };

  // Вычисляем индексы соседних слайдов
  const prevIndex = (currentIndex - 1 + cars.length) % cars.length;
  const nextIndex = (currentIndex + 1) % cars.length;

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">АВТОПАРК</h2>
      
      <div className="carousel-slide">
        <button className="nav-button prev" onClick={prevSlide}>
        <img src={prewButton} alt="" />
        </button>
        
        {/* Контейнер для миниатюр */}
        <div className="thumbnails-container">
          {/* Предыдущее изображение */}
          <img 
            src={cars[prevIndex].image}
            className="thumbnail prev-thumbnail"
            alt={`Preview ${cars[prevIndex].title}`}
            onClick={() => setCurrentIndex(prevIndex)}
          />
          
          {/* Основное изображение */}
          <img 
            src={cars[currentIndex].image}
            className="car-image"
            alt={cars[currentIndex].title}
          />
          
          {/* Следующее изображение */}
          <img 
            src={cars[nextIndex].image}
            className="thumbnail next-thumbnail"
            alt={`Preview ${cars[nextIndex].title}`}
            onClick={() => setCurrentIndex(nextIndex)}
          />
        </div>

        <button className="nav-button next" onClick={nextSlide}>
            <img src={nextButton} alt="" />
        </button>
      </div>

      <div className="indicators">
        {cars.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;