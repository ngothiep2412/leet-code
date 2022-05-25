var romanToInt = function (s) {
  const characterMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const length = s.length;
  var sum = characterMap[s[length - 1]];
  if (length == 0) {
    return 0;
  }
  if (length == 1) {
    return characterMap[s[0]];
  }
  for (let i = length - 2; i >= 0; i--) {
    if (characterMap[s[i]] >= characterMap[s[i + 1]]) {
      sum += characterMap[s[i]];
    } else {
      sum -= characterMap[s[i]];
    }
  }
  return sum;
};

console.log(romanToInt("III"));
