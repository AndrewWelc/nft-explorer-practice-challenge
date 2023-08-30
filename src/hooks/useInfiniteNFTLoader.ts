import { useState, useEffect, useRef, useMemo } from "react";
import { useInfiniteQuery } from "react-query";

import { fetchNFTs } from "../api/fetchNFTs";
import { NFT } from "../types/NFT";

export const useInfiniteNFTLoader = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  const setSearchTermHandler = (term: string) => {
    setSearchTerm(term);
    setIsSearchActive(Boolean(term));
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery(
      ["nfts"],
      ({ pageParam = 0 }) => fetchNFTs(pageParam, 20),
      {
        getNextPageParam: (lastPage, pages) => {
          const nextPage = pages.length * 20;
          return nextPage;
        },
        staleTime: 1000 * 60 * 10,
        refetchOnWindowFocus: true,
        keepPreviousData: true,
      }
    );

  const filteredNFTs = useMemo(() => {
    return (
      data?.pages
        .flat()
        .filter((nft: NFT) =>
          nft.title.toLowerCase().includes(searchTerm.toLowerCase())
        ) || []
    );
  }, [data, searchTerm]);

  const lastElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = lastElementRef.current;
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (
        entries[0].isIntersecting &&
        hasNextPage &&
        !isFetchingNextPage &&
        !isSearchActive
      ) {
        fetchNextPage();
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "100px 0px",
      threshold: 0.5,
    });

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasNextPage, fetchNextPage, isFetchingNextPage, isSearchActive]);

  return {
    searchTerm,
    setSearchTermHandler,
    isSearchActive,
    filteredNFTs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    lastElementRef,
  };
};
