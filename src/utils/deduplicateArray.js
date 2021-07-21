/**
 * Re-arrange an array by deduplicating and generate counts object.
 * @param {Array<number|string>} array Initiated array
 * @returns Counted elements object and deduplicated array.
 */
 const deduplicateArray = (array) => {
  const elementCounts = {};
  const deduplicatedArray = [...new Set(array)]; // Create an array with uniqe keys of initiated array

  // Iterate through keys and count each element
  deduplicatedArray.forEach((element, index) => {
    let count = 1;
    for (let i = index + 1; i < array.length; i += 1) {
      if (array[i] === element) {
        count += 1;
      }
    }
    elementCounts[element] = count;
  });

  return { deduplicatedArray, elementCounts };
};

export default deduplicateArray;
