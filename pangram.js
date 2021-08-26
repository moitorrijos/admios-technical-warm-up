
export const isPangram = (str) => {
  /* 
   Create a new set from the string,
   transform the set to an array 
   and verify if the length of the array 
   is as long as the letters from the alphabet.
  */
  const arr = Array.from(new Set(str.replace(/[^a-z]/gi, "")))
  if (arr.length !== 26) return false
  /* 
    Create a regular expression that match
    the patterns required, then match that to the string
    compare the first index of the array from the match method to the string
    if the first index is not equal to the string, return false
  */
  const regex = /"?([A-Za-z][a-z]+\s?_?[0-9]?\s?)+\.?"?/g
  if (str.match(regex)[0] === str) return true
  return false
}
