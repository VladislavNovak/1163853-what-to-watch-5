import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardScreen from "../card-screen/card-screen";

class CardsListScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {currentActiveCard: null};
    this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  render() {
    const films = this.props.films;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => <CardScreen key={film.id} id={film.id} poster={film.poster} title={film.title} onMouseOverHandler={this.onMouseOverHandler} onMouseLeaveHandler={this.onMouseLeaveHandler} />)}
      </div>
    );
  }

  onMouseOverHandler(id) {
    this.setState({currentActiveCard: id});
  }

  onMouseLeaveHandler(id) {
    this.setState({currentActiveCard: id});
  }
}

CardsListScreen.propTypes = {
  films: PropTypes.array.isRequired,
};

export default CardsListScreen;
