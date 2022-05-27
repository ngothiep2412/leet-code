var numberOfSteps = function (num) {
  let ans = 0;
  if (num === 0) {
    return 0;
  }
  while (num !== 0) {
    if (num % 2 == 0) {
      num = num / 2;
      ans++;
    } else {
      num = num - 1;
      ans++;
    }
  }
  return ans;
};
console.log(numberOfSteps(6));
