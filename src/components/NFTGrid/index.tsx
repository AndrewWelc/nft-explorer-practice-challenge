import React from "react";
import { Box, Grid, Button } from "@chakra-ui/react";

import SearchBar from "../SearchBar";
import NFTCard from "./NFTCard";
import NFTCardSkeleton from "./NFTCardSkeleton";
import { NFT } from "../../types/NFT";
import { useInfiniteNFTLoader } from "../../hooks/useInfiniteNFTLoader";

const NFTGrid: React.FC = () => {
  const {
    searchTerm,
    setSearchTermHandler,
    isSearchActive,
    filteredNFTs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    lastElementRef,
  } = useInfiniteNFTLoader();

  return (
    <Box p={5}>
      <SearchBar value={searchTerm} onChange={setSearchTermHandler} />
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {filteredNFTs.map((nft: NFT, index: number) => (
          <NFTCard
            key={nft.mintAddress}
            nft={nft}
            searchTerm={searchTerm}
            isLast={index === filteredNFTs.length - 1 && !isSearchActive}
            ref={lastElementRef}
          />
        ))}
        {!isSearchActive &&
          isFetching &&
          Array.from({ length: 20 }).map((_, idx) => (
            <NFTCardSkeleton key={idx} />
          ))}
      </Grid>
      <Box mt={4} textAlign="center">
        {isFetchingNextPage ? (
          <Button isLoading>Loading...</Button>
        ) : (
          !isSearchActive &&
          hasNextPage && <Button onClick={() => fetchNextPage()}>Load More</Button>
        )}
      </Box>
    </Box>
  );
};

export default NFTGrid;
