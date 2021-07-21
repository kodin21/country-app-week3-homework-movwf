import React from 'react';
import CountryList from '../../CountryList';
import CountryDetail from '../../CountryDetail';

const TabsList = {
  'country-list': (props) => <CountryList props={props} />,
  'country-detail': (props) => <CountryDetail props={props} />
};

function TabBody({ currentTab, countryData, selectedCountry, setCurrentTab, setSelectedCountry }) {
  return (
    <div className="w-full flex flex-wrap p-4 overflow-y-auto">
      {TabsList[currentTab]({ countryData, selectedCountry, setCurrentTab, setSelectedCountry })}
    </div>
  );
}

export default TabBody;
