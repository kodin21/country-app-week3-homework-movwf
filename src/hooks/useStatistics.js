import { useMemo } from 'react';
import deduplicateArray from '../utils/deduplicateArray';
import { sortObjectArray } from '../utils/sortArray';

const useStatistics = (countryData) =>
  useMemo(() => {
    let populations = countryData.map((country) => ({
      name: country.name,
      population: country.population,
    }));
    let languages = countryData.map((country) => country.languages);

    // Flat language array for operations
    languages = languages.flat();

    // Language names populated data with many duplications
    const languageNames = languages.map((language) => language.name);

    // Deduplicate the array
    let { elementCounts } = deduplicateArray(languageNames);
    // Spread each array element into objects
    elementCounts = Object.entries(elementCounts).map((language) => ({
      name: language[0],
      count: language[1],
    }));

    // Sort populations and take Top 10 elements
    populations = sortObjectArray(populations, 'population', true).splice(0, 10);
    // Sort langauges by usage and take Top 10 elements
    elementCounts = sortObjectArray(elementCounts, 'count', true).splice(0, 10);

    return {
      populations,
      languages: elementCounts,
    };
  }, [countryData]);

export default useStatistics;
