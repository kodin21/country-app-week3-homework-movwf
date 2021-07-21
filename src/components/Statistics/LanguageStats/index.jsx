import React from 'react';

function LanguageStats({ statisticsData }) {
  return (
    <div className="h-full w-1/2 flex flex-col items-end border-r-2 pr-3">
      <span className="font-bold text-lg">Languages - Top 10</span>
      <ul className="list-none list-inside">
        {statisticsData?.languages.map((language) => (
          <li key={language.name} className="font-normal text-normal text-right">
            {language.count} - {language.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageStats;
