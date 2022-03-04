import React, { useState } from "react";
import Card from "./Card";
const galleryList = [
  1, 4, 5, 5, 2, 3, 6, 8, 9, 2, 3, 4, 5, 5, 5, 5, 3, 3, 3, 3, 33, 3, 3, 3, 3, 3,
  3, 3, 3,
];

function Gallery() {
  const [showMore, setShowMore] = useState(12);

  const showMoreItems = () => {
    setShowMore((prevState) => prevState + 12);
  };
  return (
    <div className="gallery">
      <div className="gallery__body">
        {galleryList.slice(0, showMore).map((data, index) => (
          <Card />
        ))}
      </div>
      <button onClick={showMoreItems}>Show More</button>
    </div>
  );
}

export default Gallery;
