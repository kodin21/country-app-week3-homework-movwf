/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const CountryDetail = ({ props }) => {
  const { selectedCountry, countryData, setCurrentTab } = props;
  const { name, flag, population, region, capital, currencies, languages, callingCodes } =
    countryData.filter((country) => country.name === selectedCountry)[0]; // Select country for details

  return (
    <div className="h-full w-full flex flex-col">
      <span
        className="w-16 text-lg font-bold mb-4 outline-none"
        role="button"
        tabIndex="0"
        onClick={() => {
          setCurrentTab('country-list');
        }}
      >
        {'< Back'}
      </span>
      <div className="h-full w-full flex flex-row">
        <div className="w-56 h-32">
          <img src={flag} alt={name} />
        </div>
        <div className="h-full flex flex-col px-10">
          <span className="text-2xl font-bold">{name}</span>
          <span className="text-md font-semibold">
            Population : <span className="font-normal">{population.toLocaleString()}</span>
          </span>
          <span className="text-md font-semibold">
            Region : <span className="font-normal">{region}</span>
          </span>
          <span className="text-md font-semibold">
            Capital : <span className="font-normal">{capital}</span>
          </span>
          <span className="text-md font-semibold">
            Currency :
            <span className="font-normal">
              {currencies[0].name} - {currencies[0].symbol}
            </span>
          </span>
          <span className="text-md font-semibold">
            Languages :
            <ul className="list-disc list-inside">
              {languages?.map((language) => (
                <li key={language.name} className="font-normal">
                  {language.name}
                </li>
              ))}
            </ul>
          </span>
          <span className="text-md font-semibold">
            Calling Codes :
            <ul className="list-disc list-inside">
              {callingCodes?.map((code) => (
                <li key={code} className="font-normal">
                  {code}
                </li>
              ))}
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
