import { Box, Container, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import Card from "../components/Card";
import { GET_CHARACTERS, useQuery } from "../apollo/queries";
import { Character } from "../utils/types";

export default function Home() {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
  });
  console.log(data);
  return (
    <Box p={4}>
      <Stack maxW={"none"} spacing={4} as={Container} textAlign={"center"}>
        <Heading color={"gray.300"} fontSize={"9xl"}>
          Rick and Morty
        </Heading>
      </Stack>
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {loading ? (
            <h1>loading</h1>
          ) : (
            data.characters.results.map((item: Character) => (
              <Card
                key={item.id}
                item={item}
                onClick={() => console.log(item.name)}
              />
            ))
          )}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
