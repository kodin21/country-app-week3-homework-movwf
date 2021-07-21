import React from 'react';
import useStatistics from '../../hooks/useStatistics';

function Statistics({ props }) {
  const { countryData } = props;
  // Retrieve data with useStatistics hook
  const statisticsData = useStatistics(countryData);

  return (
    <div className="h-84 w-full flex flex-col p-3 overflow-y-auto">
      <span className="w-full text-3xl text-center mb-5">Statistics</span>
      <div className="w-full flex flex-row">
        Language Stats
        Population Stats
      </div>
    </div>
  );
}

export default Statistics;
