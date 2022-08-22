import React from "react";
import { Card, CardSkeleton } from "../../components/Card";
import { Character, Favorite } from "../../utils/types";
import { SimpleGrid, Alert, AlertIcon, useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setFavorite } from "../../redux/reducer/favoriteReducer";
import { ApolloError } from "@apollo/client";

type CharactersListProp = {
  isLoading: boolean;
  isError: ApolloError | undefined;
};

export default function CharactersList({
  isLoading,
  isError,
}: CharactersListProp) {
  const dispatch = useDispatch();
  const character = useSelector((state: RootState) => state.character);
  const favorite = useSelector((state: RootState) => state.favorite);
  const toast = useToast();

  const onClickSetFavorite = (
    e: React.MouseEvent<HTMLButtonElement>,
    item: Character
  ) => {
    //stop navigate event to occur when clicking on the button
    e.stopPropagation();
    const found = favorite.results.find((f: Favorite) => f.id === item.id);
    if (found) {
      toast({
        title: "You have this favorite already, you realy like this one",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    } else {
      const newFavorite: Favorite = {
        id: item.id,
        image: item.image,
        status: item.status,
        name: item.name,
      };
      dispatch(setFavorite(newFavorite));
      toast({
        title: "Favorite added",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  if (isError) {
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
        {isLoading
          ? Array.from(Array(10).keys()).map((key) => (
              <CardSkeleton key={key} />
            ))
          : character.results.map((item: Character) => (
              <Card
                key={item.name + item.id}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  onClickSetFavorite(e, item)
                }
                item={item}
              />
            ))}
      </SimpleGrid>
    </>
  );
}
