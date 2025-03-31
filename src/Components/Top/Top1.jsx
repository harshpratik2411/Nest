import React from 'react';
import NestLogo from '../../assets/Nest/NestLogo.svg';

const Top1 = () => {
  return (
    <div className="flex ml-24 mt-3 opacity-100 items-center space-x-4">
      {/* Image */}
      <img src={NestLogo} alt="Nest Logo" className="w-[180px] h-[55px]" />
    </div>
  );
};

export default Top1;
