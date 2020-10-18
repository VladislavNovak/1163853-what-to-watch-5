import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import GenreScreen from "../genre-screen/genre-screen";

import {genrePropStructure} from "../../utils/validator.prop";

class GenresListScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {selectedGenre: null};
  }

  render() {
    const genresValueList = this.props.genre.getValues();

    return (
      <ul className="catalog__genres-list">
        {genresValueList.map((genreValueItem) => <GenreScreen key={genreValueItem} genreValueItem={genreValueItem} />)}
      </ul>
    );
  }

  onGenreClickHandler() {
    // установить выбранный genre
  }
}

GenresListScreen.propTypes = {
  genre: PropTypes.shape(genrePropStructure).isRequired,
};

export default GenresListScreen;
