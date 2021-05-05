import './Todos.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, completed } from '../../redux/actions';

function Todos () {
  const [todo, setTodo] = useState('');
  
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (todo !== '') {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  const handleChange = ({ target }) => setTodo(target.value);

  const todoList = todos.map((todo) => {
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
            <input data-testid="inputField" className="todo-input" type="text" onChange={handleChange} value={todo} />
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
