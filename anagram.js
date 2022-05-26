var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  return (
    s.toLowerCase().split("").sort().join("") ===
    t.toLowerCase().split("").sort().join("")
  );
};
console.log(isAnagram("acba", "abca"));
