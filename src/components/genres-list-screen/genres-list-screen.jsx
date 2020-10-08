import React from "react";
import PropTypes from "prop-types";
import GenreScreen from "../genre-screen/genre-screen";

const GenresListScreen = (props) => {
  const genresValueList = props.genre.getValues();

  return (
    <ul className="catalog__genres-list">
      {genresValueList.map((genreValueItem) => <GenreScreen key={genreValueItem} genreValueItem={genreValueItem} />)}
    </ul>
  );
};

GenresListScreen.propTypes = {
  genre: PropTypes.object.isRequired,
  genresValueList: PropTypes.array,
}

export default GenresListScreen;
