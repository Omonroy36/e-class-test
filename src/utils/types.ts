export type Favorite = {
  name: string;
  id: number;
};

export type Favorites = Favorite[];

export type FavoriteState = {
  favorites: Favorites;
};
