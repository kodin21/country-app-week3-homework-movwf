/**
 * Selects random elemet from an array.
 * @param {Array<any>} array Initiated array.
 * @returns Selected element.
 */
 const selectRandom = (array) => array[Math.floor(Math.random() * array.length)];

 export default selectRandom;
 