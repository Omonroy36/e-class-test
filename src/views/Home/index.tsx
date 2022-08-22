import { useEffect } from "react";
import { Box, Container, Heading, Stack, Button } from "@chakra-ui/react";
import CharactersList from "./CharactersList";
import { GET_CHARACTERS, useQuery } from "../../apollo/queries";
import { useDispatch } from "react-redux";
import {
  setCharacters,
  updateCharacters,
} from "../../redux/reducer/characterReducer";

export default function Home() {
  const dispatch = useDispatch();
  const { loading, error, data, refetch } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
  });

  const onClickLoadMore = () => {
    const next = data.characters.info.next;
    if (next !== null) {
      refetch({ page: next });
    }
  };

  useEffect(() => {
    if (data) dispatch(updateCharacters(data.characters.results));
  }, [data]);

  useEffect(() => {
    if (data) dispatch(setCharacters(data.characters.results));
  });

  return (
    <Box p={4}>
      <Stack maxW={"none"} spacing={4} as={Container} textAlign={"center"}>
        <Heading color={"gray.300"} fontSize={"9xl"}>
          Rick and Morty Series
        </Heading>
      </Stack>
      <Container maxW={"6xl"} mt={10}>
        <CharactersList isLoading={loading} isError={error} />
        <Box textAlign={"center"}>
          <Button
            onClick={onClickLoadMore}
            mt={2}
            mb={2}
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"red.400"}
            color={"white"}
            _hover={{
              bg: "red.500",
            }}
            _focus={{
              bg: "red.600",
            }}
          >
            Load More
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
