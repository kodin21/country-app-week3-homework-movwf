import React from 'react';

const MID_POPULATION = 200000000;

function PopulationStats({ statisticsData }) {
  return (
    <div className="h-full w-1/2 flex flex-col items-start pl-3">
      <span className="font-bold text-lg">Populations - Top 10</span>
      <ul className="list-none list-inside">
        {statisticsData?.populations.map((country) => (
          <li key={country.name} className="font-normal">
            <span className="text-sm">{country.name}</span>
            {' - '}
            <span
              className={`text-xs px-2 text-white rounded-lg ${
                country.population > MID_POPULATION ? 'bg-red-500' : 'bg-yellow-500'
              }`}
            >
              {country.population.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopulationStats;
