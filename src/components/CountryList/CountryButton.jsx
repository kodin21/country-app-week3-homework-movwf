/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const CountryButton = ({ countryName, flagImg, setSelectedCountry, setCurrentTab }) => (
  <div
    className="h-16 w-1/2 md:w-1/3 lg:w-1/4 p-1 overflow-hidden outline-none"
    role="button"
    tabIndex="0"
    onClick={() => {
      setSelectedCountry(countryName);
      setCurrentTab('country-detail');
    }}
  >
    <div className="h-full w-full flex flex-row items-center border-2 rounded-lg px-3 hover:bg-gray-100">
      <img
        src={flagImg}
        alt={countryName}
        className="w-10 h-2/3 flex flex-row items-center justify-center"
      />
      <span className="h-full text-md flex flex-row items-center px-3 truncate">{countryName}</span>
    </div>
  </div>
);

export default CountryButton;
