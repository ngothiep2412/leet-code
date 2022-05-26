var isPalindrome = function (number) {
  let reverse = 0;
  let n = number;
  if (number < 0 || (number % 10 === 0 && number !== 0)) {
    return false;
  }
  if (number === 0) {
    return true;
  }
  while (number !== 0) {
    reverse = reverse * 10 + (number % 10);
    number = parseInt(number / 10, 10);
  }
  return reverse === n ? true : false;
};
console.log(isPalindrome(121));
