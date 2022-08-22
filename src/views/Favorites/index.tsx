import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import FavoritesList from "./FavoritesList";

export default function Favorites() {
  return (
    <Box p={4}>
      <Stack maxW={"none"} spacing={4} as={Container} textAlign={"center"}>
        <Heading color={"gray.300"} fontSize={"9xl"}>
          Your Favorites Characters
        </Heading>
      </Stack>
      <Container maxW={"6xl"} mt={10}>
        <FavoritesList />
      </Container>
    </Box>
  );
}
