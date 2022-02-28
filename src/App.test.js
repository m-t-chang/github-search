import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders page heading", () => {
    render(<App />);
    const elem = screen.getByText("GitHub Search Autocomplete");
    expect(elem).toBeInTheDocument();
});

test("search returns live data", () => {
    act(() => {
        render(<App />);
        const searchInput = screen.getByRole("textbox");
        userEvent.click(searchInput);
        userEvent.keyboard("chicken");
        userEvent.keyboard("{Enter}");
    });

    expect(screen.getByRole("list")).toBeInTheDocument();
});
