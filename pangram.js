
export const isPangram = (string) => {
  if (string === '') return false
  const regex = new RegExp(/[a-z ]\w+/, 'gi');
  return regex.test(string)
};
