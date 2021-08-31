import React from 'react';
import { act, render, screen, fireEvent, cleanup } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addTodo } from '../../../reducers';
import Todos from '../Todos';

const addTodoMock = jest.fn();

describe('todos testing', () => {
  
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockReturnValue([{id: 1, text: 'test', completed: false}]);
    render(<Todos />);
    // renderWithRedux(<Todos />, []);
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  // const startingState = [];
  // function reducer(state = startingState, action) {
  //   switch (action.type) {
  //     case 'ADD_TODO':
  //       const id = nextId;
  //       nextId++;
  //       const { text } = action;
  //       return [{ id, text, completed: false }].concat(state);
  //     default: 
  //       return state;
  //   }
  // }

  function renderWithRedux(
    component, 
    { initialState, store = createStore(reducer, initialState) }) {
      return {
        ...render(<Provider store={store}>{component}</Provider>)
      }
  }

  describe('Input field', () => {
    test('Input field renders correctly', () => {
      const inputField = screen.getByTestId('inputField');
      expect(inputField).toBeInTheDocument();
    });
    test('Input field accepts user input', () => {
      const inputField = screen.getByTestId('inputField');
      expect(inputField).toBeInTheDocument();
      userEvent.type(inputField, 'test todo');
      expect(inputField).toHaveValue('test todo');
    });
  });
  describe('Submit todo', () => {
    test('Submit button renders correctly', () => {
      const submit = screen.getByTestId('todoSubmit');
      expect(submit).toBeInTheDocument();
    });
    // test('Submit button does not fire dispatch when input empty', async () => {
    //   const inputField = screen.getByTestId('inputField');
    //   const submit = screen.getByTestId('todoSubmit');
    //   userEvent.click(submit);
    //   expect(addTodoMock).not.toHaveBeenCalled();
    //   console.log(store);
    // });
    // test('Submit button fires dispatch when input filled out', async () => {
    //   const inputField = screen.getByTestId('inputField');
    //   const submit = screen.getByTestId('todoSubmit');
    //   userEvent.type(inputField, 'test todo');
    //   console.log('_____________________________________________ before _____________________________________');
    //   userEvent.click(submit);
    //   expect(useDispatchMock).toHaveBeenCalled();
    // });
  })


})
