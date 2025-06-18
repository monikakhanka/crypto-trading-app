import { render, screen, waitFor } from "@testing-library/react";
import Home from "./Home";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import "@testing-library/jest-dom";

const mock = new MockAdapter(axios);

describe("Home Component", () => {
  beforeEach(() => {
    mock.reset();
  });

  it("displays loading state initially", () => {
    render(<Home />);
    expect(screen.getByText(/...Loading/i)).toBeInTheDocument();
  });

  it("fetches and displays assets data", async () => {
    const mockAssets = [
      { id: 1, name: "Asset 1", value: 100 },
      { id: 2, name: "Asset 2", value: 200 },
    ];

    mock
      .onGet(import.meta.env.VITE_API_FETCH_ASSETS_URL)
      .reply(200, mockAssets);

    render(<Home />);

    await waitFor(() => screen.getByText("Asset 1"));

    expect(screen.getByText("Asset 1")).toBeInTheDocument();
    expect(screen.getByText("Asset 2")).toBeInTheDocument();
  });

  it("handles error state when API fails", async () => {
    mock.onGet(import.meta.env.VITE_API_FETCH_ASSETS_URL).reply(500);

    render(<Home />);
    await waitFor(() => screen.getByText(/Error/i));

    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});
