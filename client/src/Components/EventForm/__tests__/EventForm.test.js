import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventForm from '../EventForm';

const promise = Promise.resolve();
const postMock = jest.fn(() => promise);
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

beforeEach(() => {
  render(<EventForm postEvent={postMock} />);
});

describe('Event form elements rendering', () => {
  test('Renders occasion input field', () => {
    const occasionInputField = screen.getByTestId('occasion');
    expect(occasionInputField).toBeInTheDocument();
  });
  test('Renders location input field', () => {
    const locationInputField = screen.getByTestId('location');
    expect(locationInputField).toBeInTheDocument();
  });
  test('Renders date input field', () => {
    const dateInputField = screen.getByTestId('date');
    expect(dateInputField).toBeInTheDocument();
  });
});

describe('Input fields take a user input', () => {
  test('Types inside the occasion input field', () => {
    const occasionInputField = screen.getByTestId('occasion');
    userEvent.type(occasionInputField, 'testOccasion');
    expect(occasionInputField).toHaveValue('testOccasion');
  });
  test('Types inside the location input field', () => {
    const locationInputField = screen.getByTestId('location');
    userEvent.type(locationInputField, 'testLocation');
    expect(locationInputField).toHaveValue('testLocation');
  });
  test('Chooses date from the date input field', () => {
    const dateInputField = screen.getByTestId('date');
    userEvent.click(dateInputField);
    userEvent.type(dateInputField, '2021-01-02');
    expect(dateInputField).toHaveValue('2021-01-02');
  });
});

describe('Actions when submitting the form', () => {
  test('Form does not redirect when any of the fields are empty', () => {
    const submit = screen.getByTestId('submitButton');
    const occasionInputField = screen.getByTestId('occasion');
    const locationInputField = screen.getByTestId('location');
    const dateInputField = screen.getByTestId('date');
    expect(occasionInputField).toHaveValue('');
    expect(locationInputField).toHaveValue('');
    expect(dateInputField).toHaveValue('');
    userEvent.click(submit);
    expect(mockHistoryPush).not.toHaveBeenCalledWith('/Myevents');
  });
  test('Form redirects on submit with fields filled out', async () => {
    const submit = screen.getByTestId('submitButton');
    const occasionInputField = screen.getByTestId('occasion');
    const locationInputField = screen.getByTestId('location');
    const dateInputField = screen.getByTestId('date');
    userEvent.type(occasionInputField, 'testOccasion');
    userEvent.type(locationInputField, 'testLocation');
    userEvent.click(dateInputField);
    userEvent.type(dateInputField, '2021-01-02');
    expect(occasionInputField).toHaveValue('testOccasion');
    expect(locationInputField).toHaveValue('testLocation');
    expect(dateInputField).toHaveValue('2021-01-02');
    userEvent.click(submit);
    await act(() => promise);
    expect(mockHistoryPush).toHaveBeenCalledWith('/Myevents');
  });
});
