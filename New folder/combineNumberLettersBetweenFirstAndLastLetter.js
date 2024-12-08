// Write a function that will return a string combined with the number of letters between the fist and the last letter.
// input = 'Jack', output: 'J2k'

const combineNumberLettersBetweenFirstAndLastLetter = (str) => {
  const length = str.length;
  return str[0] + (length - 2) + str[length - 1];
};

combineNumberLettersBetweenFirstAndLastLetter("Jack");
