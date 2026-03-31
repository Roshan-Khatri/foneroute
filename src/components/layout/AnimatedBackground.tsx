
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="absolute w-[200%] h-[200%] bg-gradient-to-br from-background to-primary/10 animate-slow-spin" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
    </div>
  );
};

export default AnimatedBackground;
