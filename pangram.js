
export const isPangram = (string) => {
  /* 
   Create a new set from the string,
   transform the set to an array 
   and verify if the length of the array 
   is as long as the letters from the alphabet.
  */
  const array = Array.from(new Set(string.replace(/[^a-z]/g, '')));
  if (array.length !== 26) return false
  /* 
    Create a regular expression that matches the following
  */
  const regex = new RegExp(/.[a-z ]\w../, 'gi');
  return regex.test(string)
};
