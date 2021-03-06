import React, { useState } from 'react';

import { Search } from 'react-feather';
import Dropdown from './Dropdown';

import {
  sqftOptions,
  rentPriceOption,
  listDateOptions,
  bedroomsOptions,
} from '../config';

const Filter = () => {
  const [keyword, setKeyword] = useState('');
  const [listedDated, setListedDated] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [sqft, setSqft] = useState('');
  const [rentPrice, setRentPrice] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
  };
  console.log(keyword);
  return (
    <div className='filter'>
      <div className='filter__container'>
        <form onSubmit={handleForm} className='filter__container-search'>
          <input
            type='text'
            name='keyword'
            placeholder='Enter a Keyword'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <div className='filter__container-search-btn'>
            <Search strokeWidth={1} color={'#fff'} />
            <button type='submit'> Search </button>
          </div>
        </form>

        <label className='filter__container-seprator'>
          <span>Filter settings</span>
        </label>

        <div className='filter__container-dropdown'>
          <Dropdown
            title='Publish Date'
            data={listDateOptions}
            toggleItems={setListedDated}
          />
          <Dropdown
            title='Area in Square feet'
            data={sqftOptions}
            toggleItems={setSqft}
          />
          <Dropdown
            title='Number of Bedrooms'
            data={bedroomsOptions}
            toggleItems={setBedrooms}
          />
          <Dropdown
            title='Monthly Rent Price'
            data={rentPriceOption}
            toggleItems={setRentPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
