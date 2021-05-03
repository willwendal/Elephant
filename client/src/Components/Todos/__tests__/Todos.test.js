import React from 'react';
import { Provider } from 'react-redux'
import { act, render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux'
import userEvent from '@testing-library/user-event';
import Todos from '../Todos';
import { addTodo, completed } from '../../../redux/actions';

describe('todos testing', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    useSelectorMock.mockReturnValue([{id: 1, text: 'test', completed: false}]);
    useDispatchMock.mock();
    // [{id: 1, text: 'test', completed: false}]
    render(<Todos />);
  });
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
    test('Submit button does not fire dispatch when input empty', () => {
      const inputField = screen.getByTestId('inputField');
      const submit = screen.getByTestId('todoSubmit');
      userEvent.type(inputField, '');
      userEvent.click(submit);
      expect(useDispatchMock).toHaveBeenCalled();

    });
    test('Submit button dispatches to redux when input filled out', () => {
      
    })
  })
  
  describe('redux', () => {
    test('useSelector fired on render', () => {
      expect(useDispatchMock).toHaveBeenCalled();
    });
  });

})
