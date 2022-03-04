import React from "react";
import Image from "next/image";
import Header from "../src/components/Header";
import Carousel from "../src/components/Carousel";

const Detail = () => {
  return (
    <>
      <Header />
      <div className="detail">
        <h1>Premium penthouse in central Barcelona with panoramic views</h1>
        <div className="detail__container">
          <div className="detail__left">
            <div className="detail__left_image">
              <Image
                src={
                  "https://c1.wallpaperflare.com/preview/120/272/942/luxury-home-upscale-architecture-design.jpg"
                }
                width={735}
                height={363}
              />
            </div>
            <div className="detail__left_image-carousal">
              <Carousel />
            </div>
            <div className="detail__left_fal"></div>
            <div className="detail__left_price_container"></div>
            <div className="detail__left_description"></div>
            <div className="detail__left_google_image"></div>
          </div>
          <div className="detail__right">
            <div className="detail__right_brief_descp"></div>
            <div className="detail__right_realtor"></div>
            <div className="detail__right_contact"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
