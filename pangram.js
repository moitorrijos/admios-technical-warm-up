
export const isPangram = (string) => {
  const regex = new RegExp(/[a-z ]+\D/gi, '');
  // return regex.test(string)
  const array = Array.from(new Set(string.replace(/[^a-z]/g, '')));
  if (array.length !== 26) return false
  return regex.test(string)
};
