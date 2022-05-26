var strStr = function (haystack, needle) {
  if (haystack.length === 0 || needle.length === 0) {
    return 0;
  }
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (needle === haystack.substring(i, i + needle.length)) {
      return i;
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"));
