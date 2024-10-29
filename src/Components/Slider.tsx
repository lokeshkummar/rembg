import React, { useState, useRef, useEffect } from 'react';

interface ImageComparisonProps {
  beforeImage?: string;
  afterImage?: string;
}

const Slider: React.FC<ImageComparisonProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    let clientX: number;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const position = ((clientX - containerRect.left) / containerWidth) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (e: MouseEvent) => handleMove(e as unknown as React.MouseEvent<HTMLDivElement>);
    const handleTouchMove = (e: TouchEvent) => handleMove(e as unknown as React.TouchEvent<HTMLDivElement>);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const defaultBeforeImage = "https://www.autoremov.com/assets/img/home/autoremov-hero-1.2.png";
  const defaultAfterImage = "https://www.autoremov.com/assets/img/home/autoremov-hero-1.1.jpg";

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-2xl shadow-[#02e797] border-2 border-teal-400 bg-[#02e797]" ref={containerRef}>
      <img src={beforeImage || defaultBeforeImage} alt="Before" className="w-full h-auto" />
      <img 
        src={afterImage || defaultAfterImage} 
        alt="After" 
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      />
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Slider;