export const getFavorites = () => {
  return JSON.parse(
    localStorage.getItem("favorites")
  ) || [];
};

export const addFavorite = (tool) => {
  const favorites = getFavorites();

  const exists = favorites.find(
    (item) => item.id === tool.id
  );

  if (!exists) {
    favorites.push(tool);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }
};

export const removeFavorite = (id) => {
  const favorites = getFavorites().filter(
    (tool) => tool.id !== id
  );

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );
};