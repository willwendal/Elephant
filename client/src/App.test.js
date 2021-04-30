import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
  render(<App />);
});

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
});

describe('User types into input fields', () => {
  test('Types inside the username input fields', () => {
    const userInputField = screen.getByTestId('usernameInput');
    userEvent.type(userInputField, 'testUsername');
    expect(userInputField).toHaveValue('testUsername');
  });
  test('Types inside the password input fields', () => {
    const passwordInputField = screen.getByTestId('passwordInput');
    userEvent.type(passwordInputField, 'testPassword');
    expect(passwordInputField).toHaveValue('testPassword');
  });
});

describe('Actions when clicking the sign in button', () => {
  test('If any of the input fields is empty, page should not redirect on click', () => {
    const buttonElement = screen.getByText('Sign in');
    const userInputField = screen.getByTestId('usernameInput');
    const passwordInputField = screen.getByTestId('passwordInput');
    expect(userInputField).toHaveValue('');
    expect(passwordInputField).toHaveValue('');
    userEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
    expect(passwordInputField).toBeInTheDocument();
    expect(userInputField).toBeInTheDocument();
  });
})
