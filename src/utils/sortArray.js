/**
 * Sort an array alphabetical/numerical
 * @param {Array<number|string>} array Number or string array for sorting
 * @param {boolean} mode Ascendant, A->Z : true  Descendant, Z->A : false
 * @returns Sorted array
 */
 const sortArray = (array, mode) => array.sort((a, b) => ((mode ? a > b : a < b) ? -1 : 1));

 /**
  * Sort an array alphabetical/numerical by key
  * @param {Array<object>} array Number or string array for sorting
  * @param {string} key Sorting key
  * @param {boolean} mode Ascendant, A->Z : true  Descendant, Z->A : false
  * @returns Sorted array
  */
 const sortObjectArray = (array, key, mode) =>
   array.sort((a, b) => ((mode ? a[key] > b[key] : a[key] < b[key]) ? -1 : 1));
 
 export { sortArray, sortObjectArray };
 