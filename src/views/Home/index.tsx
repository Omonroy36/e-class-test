import { useEffect } from "react";
import { Box, Container, Heading, Stack, Button, Flex } from "@chakra-ui/react";
import CharactersList from "./CharactersList";
import { GET_CHARACTERS, useQuery } from "../../apollo/queries";
import { useDispatch } from "react-redux";
import { setCharacters } from "../../redux/reducer/characterReducer";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

export default function Home() {
  const dispatch = useDispatch();
  const { loading, error, data, refetch } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
  });

  const onClickNextPage = () => {
    const next = data.characters.info.next;
    if (next !== null) {
      refetch({ page: next });
    }
  };

  const onClickPreviousPage = () => {
    const previous = data.characters.info.prev;
    if (previous !== null) {
      refetch({ page: previous });
    }
  };

  useEffect(() => {
    if (data) dispatch(setCharacters(data.characters.results));
  });

  return (
    <Box p={4}>
      <Stack maxW={"none"} spacing={4} as={Container} textAlign={"center"}>
        <Heading color={"gray.300"} fontSize={"9xl"}>
          Rick and Morty Series
        </Heading>
        <Flex justifyContent={"space-between"}>
          <Box textAlign={"center"}>
            <Button
              leftIcon={<GrLinkPrevious />}
              onClick={onClickPreviousPage}
              mt={2}
              mb={2}
              fontSize={"sm"}
              rounded={"full"}
              bg={"red.400"}
              color={"white"}
              disabled={!data?.characters.info.prev}
            >
              Previous
            </Button>
          </Box>
          <Box textAlign={"center"}>
            <Button
              rightIcon={<GrLinkNext />}
              onClick={onClickNextPage}
              mt={2}
              mb={2}
              fontSize={"sm"}
              rounded={"full"}
              bg={"red.400"}
              color={"white"}
              disabled={!data?.characters.info.next}
            >
              Next
            </Button>
          </Box>
        </Flex>
      </Stack>
      <Container maxW={"6xl"} mt={10}>
        <CharactersList isLoading={loading} isError={error} />
      </Container>
      <Flex justifyContent={"space-between"}>
        <Box textAlign={"center"}>
          <Button
            leftIcon={<GrLinkPrevious />}
            onClick={onClickPreviousPage}
            mt={2}
            mb={2}
            fontSize={"sm"}
            rounded={"full"}
            bg={"red.400"}
            color={"white"}
            disabled={!data?.characters.info.prev}
          >
            Previous
          </Button>
        </Box>
        <Box textAlign={"center"}>
          <Button
            rightIcon={<GrLinkNext />}
            onClick={onClickNextPage}
            mt={2}
            mb={2}
            fontSize={"sm"}
            rounded={"full"}
            bg={"red.400"}
            color={"white"}
            disabled={!data?.characters.info.next}
          >
            Next
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
