
export const isPangram = (str) => {
  if (str === "" || str === undefined) return false
  /* 
   Create a new set from the string,
   transform the set to an array 
  */
  const arr = Array.from(new Set(str.replace(/[^a-z]/gi, "")))
  /* 
    Create a regular expression that match
    the patterns required to check if a string is a pangram
  */
  const regex = /"?([A-Za-z][a-z]+\s?_?[0-9]?\s?)+\.?"?/g
  /*
    If the length of the array is equal to the length of the alphabet,
    and the string matches the regular expression
    then the string is a pangram
  */
  if (arr.length === 26 && str.match(regex)[0] === str) return true
  return false
}
