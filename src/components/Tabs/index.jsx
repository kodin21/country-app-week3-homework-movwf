import React, { useEffect, useState } from 'react';
import TabHeader from './TabHeader';
import fetchCountryData from '../../services/fetchCountryData';

function Tabs() {
  const [currentTab, setCurrentTab] = useState('country-list');
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    // Fetch country data and update state
    fetchCountryData.then(setCountryData);
  }, []);

  return (
    <div className="h-4/6 w-11/12 border-2 rounded-lg flex flex-col">
      <TabHeader {...{ setCurrentTab }} />
      TabsBody
    </div>
  );
}

export default Tabs;
