var plusOne = function (digits) {
  let rs = 1;
  let value = 0;
  let i = digits.length - 1; // 9
  while (i >= 0 && rs) {
    value = digits[i] + rs; // 10
    rs = Math.floor(value / 10); // 1
    digits[i] = value % 10; // 0
    i--;
  }
  if (rs) {
    digits.unshift(rs);
  }
  return digits;
};

console.log(plusOne([9]));
