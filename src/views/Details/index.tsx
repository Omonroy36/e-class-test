import React from "react";
import { Container, Alert, AlertIcon, useToast } from "@chakra-ui/react";
import DetailsSkeleton from "./DetailsSkeleton";
import { GET_CHARACTER_BY_ID, useQuery } from "../../apollo/queries";
import { useParams } from "react-router-dom";
import { Character, Favorite } from "../../utils/types";
import { setFavorite } from "../../redux/reducer/favoriteReducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { DetailsCard } from "../../components/Card";

export default function Details() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id },
  });
  const dispatch = useDispatch();
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

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    );
  }

  return (
    <Container maxW={"7xl"}>
      {loading ? (
        <DetailsSkeleton />
      ) : (
        <DetailsCard
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            onClickSetFavorite(e, data.character)
          }
          character={data.character}
        />
      )}
    </Container>
  );
}
