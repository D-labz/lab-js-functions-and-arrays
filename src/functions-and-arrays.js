// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else return b;
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }
  if (words.length === 1) {
    return words[0];
  }

  let winner = words[0];

  for (let i = 1; i < words.length; i++) {
    if (winner.length > words[i].length) {
      continue;
    } else if (winner.length < words[i].length) {
      winner = words[i];
    }
  }
  return winner;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let counter = 0;

  for (i = 0; i < numbers.length; i++) {
    counter += numbers[i];
  }
  return counter;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
  if (numbers2.length === 0) {
    return 0;
  }
  let result = sumNumbers(numbers2) / numbers2.length;
  return result;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(words2, search) {
  if (words2.length === 0) {
    return null;
  }

  for (let i = 0; i < words2.length; i++) {
    if (search === words2[i]) {
      return true;
    }
  }
  return false;
}
