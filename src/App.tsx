import { ChakraProvider, Box, Heading, Container } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import NFTGrid from "./components/NFTGrid";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Container maxW="container.xl">
          <Box 
            bg="blue.500"
            color="white"
            py={4}
            textAlign="center"
          >
            <Heading as="h1" size="xl">
              Magic Eden NFTs
            </Heading>
          </Box>
          <Box mt={6}>
            <NFTGrid />
          </Box>
        </Container>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
