import { Box, Skeleton } from '@chakra-ui/react';
import React from 'react';

const NFTCardSkeleton: React.FC = () => {
  return (
    <Box 
      maxW="sm" 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      boxShadow="md"
      _hover={{ transform: 'scale(1.02)' }}
    >
      <Skeleton height="200px" />
      <Box p={6}>
        <Skeleton height="20px" width="50%" />
        <Skeleton height="20px" width="50%" marginTop="4" />
      </Box>
    </Box>
  );
}

export default NFTCardSkeleton;
