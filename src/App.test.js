import { render, screen } from '@testing-library/react';
import App from './App';

describe('App container', () => {
  it("render the app container element", () => {
    const { queryByTestId } = render(<App />);

    expect(queryByTestId("app-container")).toBeTruthy()
  });
  it("render the routes container element", () => {
    const { queryByTestId } = render(<App />);

    expect(queryByTestId("app-routes-container")).toBeTruthy()
  });
});
