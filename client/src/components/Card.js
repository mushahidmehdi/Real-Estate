import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="card">
      <Image
        width={350}
        height={250}
        src={
          "https://c1.wallpaperflare.com/preview/120/272/942/luxury-home-upscale-architecture-design.jpg"
        }
      />
      <div className="card__body">
        <h1>Large 4-room apartment with a beautiful terrace</h1>
        <h3>320 000€</h3>
        <p>Barcelona IV. </p>
      </div>
    </div>
  );
};

export default Card;
