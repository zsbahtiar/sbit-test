/* Refactor from this 

function findFirstStringInBracket(str) {
  if (str.length > 0) {
    let indexFirstBracketFound = str.indexOf("(");
    if (indexFirstBracketFound >= 0) {
      let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
      if (wordsAfterFirstBracket) {
        wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
        let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
        if (indexClosingBracketFound >= 0) {
          return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
        } else {
          return "";
        }
      } else {
        return "";
      }
    } else {
      return "";
    }
  } else {
    return "";
  }
}


/* to this */

/**
 *
 * @param {*} str
 * @returns
 */
const findFirstStringInBracket = (str = "") => {
  if (str.length > 0) {
    const searchData = {
      indexOfFirstBracket: null,
      indexOfCloseFirstBracket: null,
    };
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(" && searchData.indexOfFirstBracket === null) {
        searchData.indexOfFirstBracket = i;
      } else if (
        str[i] === ")" &&
        searchData.indexOfCloseFirstBracket === null
      ) {
        searchData.indexOfCloseFirstBracket = i;
        break;
      }
    }
    return searchData.indexOfCloseFirstBracket === null ||
      searchData.indexOfFirstBracket === null
      ? ""
      : str.substring(
          searchData.indexOfFirstBracket + 1,
          searchData.indexOfCloseFirstBracket
        );
  }

  return "";
};

const input = "Negara (INDONESIA) itu cantik!";

console.log("FROM THIS:", input);
console.log("TO THIS:", findFirstStringInBracket(input));
