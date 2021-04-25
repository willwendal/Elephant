import './Todos.scss';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo, completed } from '../actions';

function Todos() {
  
  const [todo, setTodo] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo('');
  };

  const handleChange = ({ target }) => setTodo(target.value);
  
  return (
    <div className="todo-form">
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={todo} />
        <button type="submit">Add task</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            key={todo.id}
            onClick={() => dispatch(completed(todo.id))}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      {
        
      }
    </div>
  );
};

export default Todos
