import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import CharactersList from "./CharactersList";

export default function Home() {
  return (
    <Box p={4}>
      <Stack maxW={"none"} spacing={4} as={Container} textAlign={"center"}>
        <Heading color={"gray.300"} fontSize={"9xl"}>
          Rick and Morty Series
        </Heading>
      </Stack>
      <Container maxW={"6xl"} mt={10}>
        <CharactersList />
      </Container>
    </Box>
  );
}
