import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import GenreScreen from "../genre-screen/genre-screen";

import {genreListPropStructure} from "../../utils/validator.prop";

class GenresListScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {selectedGenre: null};
  }

  render() {
    const {genreList} = this.props;

    return (
      <ul className="catalog__genres-list">
        {genreList.categories.map((category) => <GenreScreen key={category.id} type={category.type} />)}
      </ul>
    );
  }

  onGenreClickHandler() {
    // установить выбранный genre
  }
}

GenresListScreen.propTypes = {
  genreList: genreListPropStructure,
};

export default GenresListScreen;
