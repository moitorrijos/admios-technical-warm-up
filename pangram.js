
export const isPangram = (string) => {
  if (string === '') return false
  const regex = new RegExp(/[a-z ]\w+/, 'g');
  return regex.test(string)
};
