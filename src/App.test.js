<<<<<<< HEAD
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
=======
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
>>>>>>> 793e072 (Initialize project using Create React App)
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
