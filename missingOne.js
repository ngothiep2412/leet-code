var missingNumber = function (nums) {
  let rs = new Set(nums);
  for (let i = 0; i < nums.length + 1; i++) {
    if (!rs.has(i)) {
      return i;
    }
  }
  return -1;
};
