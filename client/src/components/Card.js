import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Card = ({
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
}) => {
  const router = useRouter();
  const numberWithComma = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  console.log(main_image);
  return (
    <div
      className='card'
      onClick={() => {
        router.push({
          pathname: '/detail',
          query: { slug: slug },
        });
      }}
    >
      <Image width={350} height={250} src={main_image} />
      <div className='card__body'>
        <h1>{title.substr(0, 38)}</h1>
        <h3>Monthy Charge: ₺ {numberWithComma(rent_price)}</h3>
        <p>{description.substr(0, 74)} </p>
      </div>
    </div>
  );
};

export default Card;
