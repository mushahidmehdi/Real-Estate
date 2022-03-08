import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { useRouter } from "next/router";

function Gallery() {
  const [showMore, setShowMore] = useState(12);
  const [loading, setLoading] = useState(false);
  const [galleryList, setGalleryList] = useState([]);
  const router = useRouter();

  const showMoreItems = () => {
    setShowMore((prevState) => {
      prevState + 12;
    });
  };

  useEffect(() => {
    const fechGallery = async () => {
      setLoading(!loading);
      const {
        data: { results },
      } = await axios("http://localhost:8000/api/listings/");
      setLoading(!loading);
      setGalleryList(results);
    };
    fechGallery();
  }, []);

  return (
    <div className="gallery">
      <div className="gallery__body">
        {galleryList
          .slice(0, showMore)
          .map(
            (
              {
                title,
                adat,
                address,
                bathrooms,
                bedrooms,
                description,
                list_date,
                main_image,
                slug,
                sqft,
                rent_price,
              },
              index
            ) => (
              <Card
                key={index}
                title={title}
                adat={adat}
                address={address}
                bathrooms={bathrooms}
                bedrooms={bedrooms}
                description={description}
                list_date={list_date}
                main_image={main_image}
                slug={slug}
                sqft={sqft}
                rent_price={rent_price}
              />
            )
          )}
      </div>
      <button onClick={showMoreItems}>Show More</button>
    </div>
  );
}

export default Gallery;
