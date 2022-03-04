import React from "react";
import Image from "next/image";
import Vector from "../../public/assests/logo/VectorWhite.svg";
import bg from "../../public/assests/relax-eryaman/footer-bg.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__image-logo">
        <Image
          src={Vector}
          style={{
            backgroundColor: "white",
          }}
        />
        <h3>Nete GayriMemkul</h3>
      </div>
      <div className="footer__image">
        <Image src={bg} width={1990} />
      </div>
    </div>
  );
};

export default Footer;
