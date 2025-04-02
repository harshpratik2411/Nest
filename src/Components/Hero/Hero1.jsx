import React from 'react';

const Hero1 = () => {
  return (
    <div className="flex flex-col space-y-4 w-[300px] h-[400px] p-4 bg-custom-white">
      <div className="text-xl font-bold text-custom-blue">Categories</div>
      <div className="flex flex-col space-y-2">
        <div className="p-3 bg-custom-green text-custom-blue  rounded-lg">Category 1</div>
        <div className="p-3 bg-custom-green text-custom-blue  rounded-lg">Category 2</div>
        <div className="p-3 bg-custom-green text-custom-blue  rounded-lg">Category 3</div>
        <div className="p-3 bg-custom-green text-custom-blue  rounded-lg">Category 4</div>
        <div className="p-3 bg-custom-green text-custom-blue  rounded-lg">Category 5</div>
      </div>
    </div>
  );
};

export default Hero1;
