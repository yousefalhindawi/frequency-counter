/*
Check whether two strings contain same characters in same order

Input: str1 = “Geeks”, s2 = “Geks” 
Output: Yes

Input: str1 = “Arnab”, s2 = “Andrew” 
Output: No
*/

const CheckTwoStringsContainSameCharacters = (str1, str2) => {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let index = 0; index < str1.length; index++) {
    frequencyCounter1[str1[index]] = str1[index + 1];
  }
  for (let index = 0; index < str2.length; index++) {
    frequencyCounter2[str2[index]] = str2[index + 1];
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (
      frequencyCounter2[key] &&
      frequencyCounter2[key] === frequencyCounter1[key]
    ) {
      return true;
    } else {
      return false;
    }
  }
};

CheckTwoStringsContainSameCharacters("Geeks", "Geks");
// CheckTwoStringsContainSameCharacters("Andrew", "Arnab");

// OR
const haveSameLetters = (word1, word2) => {
  // Helper function to create a frequency counter for a word
  const createFrequencyCounter = (word) => {
    const frequencyCounter = {};

    for (let char of word) {
      frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }

    return frequencyCounter;
  };

  // Create frequency counters for both words
  const frequencyCounter1 = createFrequencyCounter(word1);
  const frequencyCounter2 = createFrequencyCounter(word2);

  // Compare the frequency counters
  for (let char in frequencyCounter1) {
    if (frequencyCounter1[char] !== frequencyCounter2[char]) {
      return false;
    }
  }

  return true;
};

haveSameLetters("listen", "silent"); // Output: true
haveSameLetters("hello", "world"); // Output: false
