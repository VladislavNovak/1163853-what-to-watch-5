import PropTypes from "prop-types";

export const filmPropStructure = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string),
  poster: PropTypes.string.isRequired,
  posterBig: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  inMyFavoriteList: PropTypes.bool.isRequired,
}).isRequired;

export const reviewPropStructure = PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}).isRequired;
