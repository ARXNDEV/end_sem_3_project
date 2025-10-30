import React from 'react';

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2">
      <p className="absolute lg:w-[17vw] w-64 lg:right-20 right-0 bottom-28 lg:bottom-72 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-tight">
        K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. 
        On cherche la friction qui crée l'étincelle pour générer de l'émotion. 
        Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>
      <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase">
        <button className="text-[6vw] lg:mt-6" onClick={() => alert('Login clicked')}>Login</button>
      </div>
      <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase">
        <button className="text-[6vw] lg:mt-6" onClick={() => alert('Sign Up clicked')}>Sign Up</button>
      </div>
    </div>
  );
};

export default HomeBottomText;
