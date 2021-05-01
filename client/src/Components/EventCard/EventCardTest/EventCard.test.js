import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EventCard from '../EventCard'

const event = {
  date: "2021-05-09",
  location: "asjdkaj[dfjg[jdfopgj[osijd",
  occasion: "new cool event in barcelonba",
  _id: "18"
}

const mockHandleClick = jest.fn();
const deleteEvent = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHandleClick,
  })
}));

beforeEach(() => {
  render(<EventCard  event={event} deleteEvent={deleteEvent}/>);
})

describe('Button rendering', () => {
  test('Renders More details Button', () => {
    const buttonMoreDetails = screen.getByTestId('moreDetailsButton');
    expect(buttonMoreDetails).toBeInTheDocument();
  })
});
describe('Button rendering', () => {
  test('Renders Delete Button', () => {
    const deleteButton = screen.getByTestId('deleteButton');
    expect(deleteButton).toBeInTheDocument();
  });
});
describe('Redirect on click to More Details', () => {
  test('On Click To More details', () => {
    const buttonMoreDetails = screen.getByTestId('moreDetailsButton');
    userEvent.click(buttonMoreDetails)
    expect(mockHandleClick).toHaveBeenCalledWith(`/Eventdetails/${event._id}`);
  });
});
describe('Deletes Event on click', () => {
  test('Should fire the delete button', async () => {
    const deleteButton = screen.getByTestId('deleteButton');
    await userEvent.click(deleteButton);
    expect(deleteEvent).toHaveBeenCalledWith(event._id)
  })
});





