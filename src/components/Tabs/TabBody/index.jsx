import React from 'react';
import CountryList from '../../CountryList';

const TabsList = {
  'country-list': (props) => <CountryList props={props} />
};

function TabBody({ currentTab, countryData, selectedCountry, setCurrentTab, setSelectedCountry }) {
  return (
    <div className="w-full flex flex-wrap p-4 overflow-y-auto">
      {TabsList[currentTab]({ countryData, selectedCountry, setCurrentTab, setSelectedCountry })}
    </div>
  );
}

export default TabBody;
