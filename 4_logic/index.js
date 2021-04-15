/**
 * @Input @arr
 * ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
 *
 * @Output Expected is arr of object by group a.k.a @anagram
 * [   ["kita", "atik", "tika"],   ["aku", "kua"],   ["makan"],   ["kia"] ]
 */

/* init input */
const input = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];

/**
 *
 * @param {*} arr
 * @returns
 */
const solution = (arr = []) => {
  const output = []; // init array for return
  const resultUnique = [];

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i].split("").sort().join("");
    let result = [];
    if (resultUnique.indexOf(char) < 0) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j) {
          if (
            arr[i].length === arr[j].length &&
            char === arr[j].split("").sort().join("")
          ) {
            if (result.indexOf(arr[i]) < 0) {
              result.push(arr[i]);
            }
            result.push(arr[j]);
          }
        }
      }
      resultUnique.push(char);
      output.push(result.length > 0 ? result : [arr[i]]);
    }
  }

  return output;
};

console.log("FROM THIS:", input);
console.log("TO THIS:", solution(input));
