import React from 'react';
import TabButton from './TabButton';

function TabHeader({ setCurrentTab }) {
  return (
    <div className="h-12 w-full flex flex-row border-b-2">
      <TabButton {...{ setCurrentTab, tabName: 'Country List', tabSelector: 'country-list' }} />
      <TabButton {...{ setCurrentTab, tabName: 'Statistics', tabSelector: 'statistics' }} />
    </div>
  );
}

export default TabHeader;
