import React from 'react';
import Image from 'next/image';
import { Search } from 'react-feather';
import RE from '../../public/assests/relax-eryaman/relax-eryamn.jpg';

const Main = () => {
  return (
    <main className='main'>
      <div className='main__body'>
        <h1>Modern living for everyone</h1>
        <p>
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in Madrid and Barcelona more than 15
          years.
        </p>
        <div className='main__body-search'>
          <input
            className='inputField'
            type='text'
            name='search'
            id='search'
            placeholder='Search of location'
          />
          <div className='main__body-search-btn'>
            <Search strokeWidth={1.4} color={'#fff'} />
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className='main__image'>
        <Image src={RE} width={737.8} height={674.56} />
      </div>
    </main>
  );
};

export default Main;
