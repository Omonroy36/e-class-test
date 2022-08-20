import { Box, Container, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import Card from "../components/Card";

export default function Home() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} textAlign={"center"}>
        <Heading color={"gray.300"} fontSize={"9xl"}>
          Rick and Morty
        </Heading>
      </Stack>
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
