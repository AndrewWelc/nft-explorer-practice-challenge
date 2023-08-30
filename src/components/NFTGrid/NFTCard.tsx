import { Box, Image, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { NFT } from '../../types/NFT';
import solanaIcon from '../../assets/icons/solana.svg'; 

interface NFTCardProps {
  nft: NFT;
  searchTerm?: string;
  isLast?: boolean;
}

const highlightSearchTerm = (text: string, searchTerm: string) => {
  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
  return parts.map((part, index) => 
    part.toLowerCase() === searchTerm.toLowerCase() ? 
    <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> : 
    part
  );
}

const extractTokenID = (title: string) => {
  const match = title.match(/#(\d+)/);
  return match ? `#${match[1]}` : '';
}

const NFTCard = React.forwardRef<HTMLDivElement, NFTCardProps>(
  ({ nft, searchTerm = '', isLast = false }, ref) => {
    const { img, title, price } = nft;
    const assignedRef = isLast ? ref : null;

    return (
      <Box 
        ref={assignedRef} 
        cursor="pointer"
        maxW="sm" 
        borderWidth="1px" 
        borderRadius="lg" 
        overflow="hidden" 
        boxShadow="md"
        _hover={{ transform: 'scale(1.02)' }}
      >
        <Image src={img} alt={title} />
        <Box p={6}>
          <Flex justify="space-between" alignItems="center" mt={2}>
            <Text fontWeight="semibold" as="h4" lineHeight="tight">
              {searchTerm ? highlightSearchTerm(extractTokenID(title), searchTerm) : extractTokenID(title)}
            </Text>
            <Flex alignItems="center">
              <Image src={solanaIcon} alt="Solana Icon" boxSize="16px" mr={1} />
              <Text fontSize="xl" fontWeight="bold">
                {price}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    );
  }
);

NFTCard.displayName = "NFTCard";

export default NFTCard;
