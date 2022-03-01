import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders page", () => {
    render(<App />);
});

test("autocomplete suggestions appear after typing", () => {
    render(<App />);

    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument;

    const dropdown_missing = screen.queryByRole("presentation");
    expect(dropdown_missing).not.toBeInTheDocument;

    userEvent.click(searchInput);
    userEvent.keyboard("chicken");

    const dropdown = screen.getByRole("presentation");
    expect(dropdown).toBeInTheDocument;
});

test("display search results", async () => {
    render(<App />);
    const searchInput = screen.getByRole("textbox");
    userEvent.click(searchInput);
    userEvent.keyboard("chicken");

    await waitFor(
        () =>
            expect(screen.getByRole("list").children.length).toBeGreaterThan(0),
        { timeout: 5000 }
    );
});
