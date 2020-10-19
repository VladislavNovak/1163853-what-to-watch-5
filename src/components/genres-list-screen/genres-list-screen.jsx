import React, {PureComponent} from "react";

class GenresListScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {selectedGenre: null};
  }

  render() {

    return (
      <ul className="catalog__genres-list">

      </ul>
    );
  }

  onGenreClickHandler() {
    // установить выбранный genre
  }
}

export default GenresListScreen;
