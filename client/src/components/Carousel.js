import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Increment } from "../state/actions";

const Carousel = () => {
  const [number, setNumber] = useState(0);
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  return <div className="carousel"></div>;
};

export default Carousel;
