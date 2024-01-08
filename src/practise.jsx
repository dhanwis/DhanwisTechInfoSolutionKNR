import React, { useState, useEffect } from 'react';

  const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 200 pixels
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={buttonStyle}>
          Up
        </button>
      )}
    </div>
  );
};

const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '10px',
  borderRadius: '50%',
  backgroundColor: '#007BFF',
  color: '#ffffff',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
};

export default ScrollToTopButton;
