var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  var oldMagazineLength = magazine.length;
  ransomNote.split("").forEach((item) => {
    magazine = magazine.replace(item, "");
  });
  return oldMagazineLength === magazine.length + ransomNote.length;
};

console.log(canConstruct("aa", "aab"));
