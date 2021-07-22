import React from 'react';
import Flag from './Flag';
import BackButton from './BackButton';
import DetailProp from './DetailProp';
import DetailTitle from './DetailTitle';
import DetailPropList from './DetailPropList';

const CountryDetail = ({ props }) => {
  const { selectedCountry, countryData, setCurrentTab } = props;
  const { name, flag, population, region, capital, currencies, languages, callingCodes } =
    countryData.filter((country) => country.name === selectedCountry)[0]; // Select country for details

  return (
    <div className="h-full w-full flex flex-col">
      <BackButton {...{ setCurrentTab }} />
      <div className="h-full w-full flex flex-row">
        <Flag url={flag} alt={name} />
        <div className="h-full flex flex-col px-10">
          <DetailTitle title={name} />
          <DetailProp title="Population" value={population.toLocaleString()} />
          <DetailProp title="Region" value={region} />
          <DetailProp title="Capital" value={capital} />
          <DetailProp title="Currency" value={`${currencies[0].name} - ${currencies[0].symbol}`} />
          <DetailPropList title="Languages" list={languages} spreadKey="name" />
          <DetailPropList title="Calling Codes" list={callingCodes} />
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
