import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  render(<App/>)
})

describe('App rendering', () => {
  test('Renders username input field', () => {
    const userInputField = screen.getByTestId('usernameInput');
    expect(userInputField).toBeInTheDocument();
  });
  test('Renders password input field', () => {
    const passwordInputField = screen.getByTestId('passwordInput');
    expect(passwordInputField).toBeInTheDocument();
  });
  test('renders Sign in button', () => {
    const buttonElement = screen.getByText('Sign in');
    expect(buttonElement).toBeInTheDocument();
  });
  test('types username input', () => {
    const userInput = screen.getByTestId('usernameInput');
    userEvent.type(userInput, 'Hello, World')
    expect(userInput).toHaveValue('Hello, World')
  });
  test('types password input', () => {
    const userInput = screen.getByTestId('passwordInput');
    userEvent.type(userInput, 'Hello, World')
    expect(userInput).toHaveValue('Hello, World')
  });
});

