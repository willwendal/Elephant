
export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  text: text
});

export const completed = (id: string) => ({
  type: 'COMPLETED_TODO',
  id
});
