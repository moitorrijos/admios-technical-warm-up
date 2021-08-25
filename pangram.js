
export const isPangram = (string) => {
  const regex = new RegExp(/[a-z ]+\D/, 'g');
  return regex.test(string)
};
