import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import { Router} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";

describe('NavBar Rendering', () => {
  test('Rendering Add Events navigation link', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Navbar/>
      </Router>
    )
    const addEvents = screen.getByTestId('addEvents')
    expect(addEvents).toBeInTheDocument()
  });
  test('Rendering My Events navigation link', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Navbar/>
      </Router>
    )
    const myEvents = screen.getByTestId('myEvents');
    expect(myEvents).toBeInTheDocument();
  });
});

test('It navigates to AddEvents or MyEvents when clicked', async () => {
  const root = document.createElement('div');
  document.body.appendChild(root);

  render(
    <MemoryRouter initialEntries={['/Addevents']}initialEntries={['Myevents']} >
      <Navbar/>
    </MemoryRouter>,
    root
  )
  act(() => {

    const addEvents = screen.getByTestId('addEvents');
    const myEvents = screen.getByTestId('myEvents');
    addEvents.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    myEvents.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  })
  expect(document.body.textContent).toBe('Never ForgetAdd Events|My Events');
});