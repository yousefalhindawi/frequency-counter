// "1.Repeated letters in a string without using built-in methods
// Input = weeyoooz Output = ee - 2 , o-3
const repeatedLetters = (str) => {
  const freqCounter = {};
  const res = {};
  for (let index = 0; index < str.length; index++) {
    const currentLetter = str[index];
    freqCounter[currentLetter] = freqCounter[currentLetter]
      ? freqCounter[currentLetter] + 1
      : 1;
  }

  for (let key in freqCounter) {
    if (freqCounter[key] > 1) res[key] = freqCounter[key];
  }
  return res;
};

repeatedLetters("weeyoooz");
