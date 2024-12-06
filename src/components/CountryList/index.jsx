import React, { Suspense } from 'react';

const CountryButton = React.lazy(() => import('./CountryButton'));

const CountryList = ({ props }) => {
  const { countryData, setCurrentTab, setSelectedCountry } = props;
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {countryData.map((country) => (
          <CountryButton
            key={country.alpha3Code}
            {...{
              countryName: country.name,
              flagImg: country.flag,
              setCurrentTab,
              setSelectedCountry,
            }}
          />
        ))}
      </Suspense>
    </>
  );
};

export default CountryList;