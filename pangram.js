
export const isPangram = (str) => {
  if (!str) return false
  const set = new Set(str.toLowerCase().replace(/[^a-z]/gi, ""))
  if (set.size === 26) return true
  return false
}
