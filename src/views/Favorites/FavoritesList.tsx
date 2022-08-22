import React from "react";
import { SimpleCard } from "../../components/Card";
import { Favorite } from "../../utils/types";
import {
  SimpleGrid,
  Alert,
  AlertIcon,
  Link as NavLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { deleteFavorite } from "../../redux/reducer/favoriteReducer";

export default function CharactersList() {
  const dispatch = useDispatch();
  const favorite = useSelector((state: RootState) => state.favorite);

  const onClickSetFavorite = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    //stop navigate event to occur when clicking on the button
    e.stopPropagation();
    dispatch(deleteFavorite(id));
  };

  if (favorite.results.length < 1) {
    return (
      <Alert status="warning">
        <AlertIcon />
        You dont have any favorite characters yet go to
        <NavLink as={Link} to={"/"} ms="1">
          Characters
        </NavLink>
      </Alert>
    );
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {favorite.results.map((item: Favorite) => (
          <SimpleCard
            key={item.name + item.id}
            item={item}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              onClickSetFavorite(e, item.id)
            }
          />
        ))}
      </SimpleGrid>
    </>
  );
}
