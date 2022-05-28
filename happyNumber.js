var isHappy = function (n) {
  let sum = 0;
  let i;
  while (n > 0) {
    i = n % 10;
    n = Math.floor(n / 10);
    sum = sum + i * i;
  }
  if (sum === 1) {
    return true;
  } else if (sum > 1 && sum <= 4) {
    return false;
  }
  return isHappy(sum);
};

console.log(isHappy(7));
