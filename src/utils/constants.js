export const ALL_GENRE = `All genres`;
export const FILMS_COUNT_PER_CLICK = 8;
export const SIMILAR_FILMS = 4;
export const LOGO_LINK_LIGHT = `logo__link--light`;

export const isFavoriteType = {
  CHECKED: true,
  UNCHECKED: false,
};

export const TabsType = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const NameSpace = {
  APP_STATE: `APP_STATE`,
  USER: `USER`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const JumpTo = {
  FILMS: `/films/`,
  FILMS_ID_URL: `/films/:id`,
  LOGIN: `/login/`,
  ROOT: `/`,
  MYLIST: `/mylist`,
  PLAYER: `/player/`,
  PLAYER_ID_URL: `/player/:id`,
  PROMO: `/films/promo`,
  REVIEW_ID_URL: `/films/:id/review`,
  reviewBy: (params) => `/films/${params}/review`,
  REVIEW: `/review/`,
};

export const SendTo = {
  COMMENTS: `/comments/`,
  FAVORITE: `/favorite/`,
};

export const WarningTypes = {
  EMPTY_FAVORITE_LIST: `The list is empty. Please select your favorite movies...`,
  ERROR_SENDING_TO_SERVER: `Oops! Error sending comments to the server`,
};

export const IsLink = {
  YES: true,
  NO: false
};

export const CommentLength = {
  MIN: 50,
  MAX: 400
};
