import './Todos.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, completed } from '../../redux/actions';
import { ToDo } from '../../Interfaces/toDo' ;

function Todos () {
  const [todo, setTodo] = useState<string>('');
  
  const todos = useSelector((state: {todos: []}) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo !== '') {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  const handleChange = (value: string) => {
    setTodo(value);
  }

  const todoList = todos.map((todo: ToDo) => {
    return (
      <li className="todo-list-item"
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
        key={todo.id}
        onClick={() => dispatch(completed(todo.id))}
      >
      {todo.text}
      </li>
    )}
  );

  return (
    <div className="todo-form-container">
      <div className="todo-form">
        <h1 className="todo-header">Todo:</h1>
        <form className="todo-input-button" onSubmit={handleSubmit}>
          <div className="todo-input-button">
            <input data-testid="inputField" className="todo-input" type="text" onChange={(e) => handleChange(e.target.value)} value={todo} />
            <button data-testid="todoSubmit" className="todo-button" type="submit">Add task</button>

          </div>
        </form>
      </div>
      <div className='todo-list'>
        <ul>

          {todoList}
        </ul>
  </div>
  </div>
  );
}

export default Todos;
