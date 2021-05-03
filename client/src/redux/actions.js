
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text: text
})

export const completed = (id) => ({
  type: 'COMPLETED_TODO',
  id
})
