import { render, screen } from "@testing-library/react";
import App from "./components/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// http://api.openweathermap.org/data/2.5/weather?q=Katowice&appid=5f5bc434b19388d376011cbda820fc7d
