const stringObj = {
    randomNumber () {
    return Math.floor(Math.random() * 100);
  },

  upperString(string) {
    return string.toUpperCase();
  },

  firstCharacter(string) {
    return string[0];
  },

  concat(string1, string2) {
    return string1 + string2;
  },
}

module.exports = stringObj;