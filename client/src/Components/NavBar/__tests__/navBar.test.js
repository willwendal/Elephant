import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe('NavBar Rendering', () => {
  test('Rendering Add Events navigation link', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );
    const smth = screen.getByTestId('addEvents');
    expect(smth).toBeInTheDocument();
  });
  test('Rendering My Events navigation link', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );
    const smth = screen.getByTestId('myEvents');
    expect(smth).toBeInTheDocument();
  });
});

// test('salal', () => {
//   const history = createMemoryHistory()
//   render(
//     <Router history={history}>
//       <Navbar />
//     </Router>
//   )
//   const letClick = { button: 0}
//   const addevent = screen.getByText('Add Events');
//   userEvent.click(screen.getByText('Add Events'))
// })
