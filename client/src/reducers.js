import { combineReducers } from 'redux'

let nextId = 0
const todos = (

  state = [],
  action

) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const id = nextId
      nextId++
      const { text } = action
      return [{ id, text, completed: false }].concat(state)
    }
    case 'COMPLETED_TODO': {
      const { id } = action
      return state.map((todo) => (
        {
          ...todo,
          completed: todo.id === id
            ? !todo.completed
            : todo.completed
        }))
    }
    default:
      return state
  }
}

const reducers = combineReducers({
  todos
})

export default reducers
