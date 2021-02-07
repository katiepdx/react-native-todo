export const getTodos = async (url) => {
  const res = await fetch(url)
  if (!res.ok) throw ('Failed to fetch all todos')
  const data = await res.json()
  return data
}

export const addTodo = async (url, todoToAdd) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(todoToAdd),
    headers: { "Content-Type": "application/json; charset=UTF-8" }
  })
  if (!res.ok) throw ('Failed to add a todo')
  const data = res.json()
  return data
}
