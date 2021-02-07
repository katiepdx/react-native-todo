export const getTodos = async (url) => {
  const res = await fetch(url)
  if (!res.ok) throw ('Failed to fetch all todos')
  const data = await res.json()
  return data
}
