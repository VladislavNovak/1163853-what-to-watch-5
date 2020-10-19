export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_ACTIVE_GENRE`,
  FILTER_FILMS_LIST_BY_GENRE: `FILTER_FILMS_LIST_BY_GENRE`
};

export const ActionCreator = {
  changeActiveGenre: (newSelectedGenre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: newSelectedGenre
  }),

  filterFilmsListByGenre: (newSelectedGenre) => ({
    type: ActionType.FILTER_FILMS_LIST_BY_GENRE,
    payload: newSelectedGenre
  }),
};
