import React, { useEffect } from "react";
import { Card, CardSkeleton } from "../../components/Card";
import { GET_CHARACTERS, useQuery } from "../../apollo/queries";
import { Character } from "../../utils/types";
import { SimpleGrid, Alert, AlertIcon, Button, Box } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setCharacters } from "../../redux/reducer/characterReducer";

export default function CharactersList() {
  const { loading, error, data, refetch } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
  });
  const dispatch = useDispatch();
  const character = useSelector((state: RootState) => state.character);

  useEffect(() => {
    if (data) dispatch(setCharacters(data.characters.results));
  }, [data, dispatch]);

  const onClickLoadMore = () => {
    const next = data.characters.info.next;
    if (next !== null) {
      refetch({ page: next });
    }
  };

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    );
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {loading
          ? Array.from(Array(10).keys()).map((key) => (
              <CardSkeleton key={key} />
            ))
          : character.results.map((item: Character) => (
              <Card
                key={item.name + item.id}
                onClick={() => console.log(item)}
                item={item}
              />
            ))}
      </SimpleGrid>
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
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "red.500",
          }}
          _focus={{
            bg: "red.500",
          }}
        >
          Load More
        </Button>
      </Box>
    </>
  );
}
