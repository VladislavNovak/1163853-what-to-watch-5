import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import FilmScreen from "../film/film";

import {filmPropStructure} from "../../utils/validator.prop";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.timerID = null;

    this.state = {
      activeFilmID: -1,
    };

    this.handleMouseOverFilm = this.handleMouseOverFilm.bind(this);
    this.handleMouseLeaveFilm = this.handleMouseLeaveFilm.bind(this);
  }

  handleMouseOverFilm(id) {
    if (this.timerID !== null) {
      clearTimeout(this.timerID);
    }

    this.timerID = setTimeout(() => this.setState({activeFilmID: id}), 1000);
  }

  handleMouseLeaveFilm() {
    this.setState({activeFilmID: -1});
    clearTimeout(this.timerID);
    this.timerID = null;
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearTimeout(this.timerID);
    }
  }

  render() {
    const {films, visibleFilmsCount, handleMoreButtonClick} = this.props;

    const visibleFilms = films.slice(0, visibleFilmsCount);

    return (
      <React.Fragment>
        <div className={`catalog__movies-list`}>
          {visibleFilms.map((film) => (
            <FilmScreen
              key={film.id}
              isActiveFilm={this.state.activeFilmID === film.id}
              id={film.id}
              poster={film.poster}
              title={film.title}
              trailer={film.trailer}
              handleMouseOverFilm={this.handleMouseOverFilm}
              handleMouseLeaveFilm={this.handleMouseLeaveFilm}
            />
          ))}
        </div>

        {films.length > visibleFilmsCount ? (
          <div className="catalog__more">
            <button
              className="catalog__button"
              type="button"
              onClick={handleMoreButtonClick}
            >
              Show more
            </button>
          </div>
        ) : (
          ``
        )}
      </React.Fragment>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmPropStructure).isRequired,
  visibleFilmsCount: PropTypes.number.isRequired,
  handleMoreButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({visibleFilmsCount}) => ({visibleFilmsCount});

const mapDispatchToProps = (dispatch) => ({
  handleMoreButtonClick() {
    dispatch(ActionCreator.addNewVisibleFilms());
  }
});

export {FilmsList};
export default connect(mapStateToProps, mapDispatchToProps)(FilmsList);


