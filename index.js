const sum = (a, b) => {
  return a + b;
};

const capitalise = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const reverse = word => {
  return word.split('').reverse().join('');
};

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

const decipher = (phrase, shiftBy) => {
  const phraseArr = phrase.split('');

  const newPhraseArr = phraseArr.map(letter => {
    let asciiCode = letter.charCodeAt();

    if (asciiCode >= 97 && asciiCode <= 122) {
      // Handle lowercase
      let newLowerCode = asciiCode + shiftBy;

      if (newLowerCode > 122) {
        newLowerCode -= 26;
      }

      return String.fromCharCode(newLowerCode);
    } else if (asciiCode >= 65 && asciiCode <= 90) {
      // Handle uppercase
      let newUpperCode = asciiCode + shiftBy;

      if (newUpperCode > 90) {
        newUpperCode -= 26;
      }
      newUpperCode;
      return String.fromCharCode(newUpperCode);
    } else {
      // Handle other characters
      return String.fromCharCode(asciiCode);
    }
  });

  return newPhraseArr.join('');
};

const arrayAnalysis = array => {
  const average = array.reduce((acc, cur) => acc + cur, 0) / array.length;
  const max = array.reduce((acc, cur) => (cur > acc ? cur : acc), 0);
  const min = array.reduce((acc, cur) => (cur < acc ? cur : acc), 1);
  const length = array.length;

  return { average, min, max, length };
};

module.exports = {
  sum,
  capitalise,
  reverse,
  calculator,
  decipher,
  arrayAnalysis,
};
