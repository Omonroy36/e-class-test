export type Favorite = {
  name: string;
  id: number;
};

export type Favorites = Favorite[];

export type FavoriteState = {
  favorites: Favorites;
};

export interface Character {
  name: string;
  id: number;
  image: string;
  status: string;
  species: string;
}

export type Characters = Character[];

export type CharacterState = {
  results: Characters;
};

export type CharacterDetails = {
  name: string;
  id: number;
  image: string;
  status: "Alive" | "Dead" | "Unknown";
  gender: string;
  species: string;
  created: string;
};
