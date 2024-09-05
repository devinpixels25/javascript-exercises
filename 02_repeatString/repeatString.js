const repeatString = function (str, num) {
  stringTwo = "";
  if (num < 0) {
    return "ERROR";
  }
  for (i = 0; i < num; i++) {
    stringTwo += str;
  }
  return stringTwo;
};
repeatString("goodbye", -1);
// Do not edit below this line
module.exports = repeatString;
