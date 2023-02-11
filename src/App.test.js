import { render, screen } from '@testing-library/react';
import App from './App';

// Components
import Header from "./components/Header";
import NewDoc from "./components/NewDoc";

// React
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

test('Checks if the header Text Editor is there', () => {
  render(<App />, { wrapper: MemoryRouter });
  const headerElement = screen.getByText(/Text Editor/i);
  expect(headerElement).toBeInTheDocument();
});

test('Checks if the New document button is on the page', () => {
  render(<Header />, { wrapper: MemoryRouter });
  const new_button = screen.getByText(/New document/i);
  expect(new_button).toBeTruthy();
});

test('Checks if the Edit document button is on the page', () => {
  render(<Header />, { wrapper: MemoryRouter });
  const edit_button = screen.getByText(/Edit document/i);
  expect(edit_button).toBeTruthy();
});

test('Checks if the Save button is on the page', () => {
  render(<NewDoc />, { wrapper: MemoryRouter });
  const save_button = screen.getByText(/Save/i);
  expect(save_button).toBeTruthy();
});
