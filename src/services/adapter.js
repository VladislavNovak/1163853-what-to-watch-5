import Level from "../utils/level";

export const adaptOneFilmToClient = (film) => ({
  id: film.id,
  title: film.name,
  genre: film.genre,
  released: film.released,
  score: film.rating,
  level: new Level().getLevel(film.rating),
  rating: film[`scores_count`],
  description: film.description,
  director: film.director,
  starring: film.starring,
  poster: film[`poster_image`],
  posterBig: film[`preview_image`],
  trailer: film[`preview_video_link`],
  fullVideo: film[`video_link`],
  runtime: film[`run_time`],
  inMyFavoriteList: film[`is_favorite`],
  backgroundImage: film[`background_image`],
});

export const adaptFilmsToClient = (data) => data.map(adaptOneFilmToClient);
