import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";
import NFTGrid from "..";
import * as Hooks from "../../../hooks/useInfiniteNFTLoader";

jest.mock("../../../hooks/useInfiniteNFTLoader");

test("NFTGrid renders NFT items", () => {
  const mockData = [
    { mintAddress: "1", title: "NFT1" },
    { mintAddress: "2", title: "NFT2" }
  ];
  
  (Hooks.useInfiniteNFTLoader as jest.Mock).mockReturnValue({
    searchTerm: "",
    setSearchTermHandler: jest.fn(),
    isSearchActive: false,
    filteredNFTs: mockData,
    fetchNextPage: jest.fn(),
    hasNextPage: false,
    isFetchingNextPage: false,
    isFetching: false,
    lastElementRef: { current: null }
  });

  render(<NFTGrid />);

  expect(screen.getByAltText("NFT1")).toBeInTheDocument();
  expect(screen.getByAltText("NFT2")).toBeInTheDocument();
  
});
