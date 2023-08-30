import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "..";

test("SearchBar updates on input change", () => {
  const onChange = jest.fn();
  
  render(<SearchBar value="" onChange={onChange} />);

  const input = screen.getByPlaceholderText("Search NFTs...");
  fireEvent.change(input, { target: { value: "Test" } });

  expect(onChange).toHaveBeenCalledWith("Test");
});
