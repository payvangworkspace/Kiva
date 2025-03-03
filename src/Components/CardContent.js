import React from "react";

const CardContent = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {image && <img src={image} alt={title} className="w-20 h-20 rounded-full mb-4" />}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CardContent;
