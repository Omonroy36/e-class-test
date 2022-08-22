export type Favorite = {
  name: string;
  id: number;
  status: string;
  image: string;
};

export type Favorites = Favorite[];

export type FavoriteState = {
  results: Favorites;
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
