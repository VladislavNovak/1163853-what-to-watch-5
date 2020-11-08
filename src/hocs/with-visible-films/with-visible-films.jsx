import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {selectsActiveGenre, selectsFilteredFilms} from "../../store/reducers/app-state/selectors";

import {ALL_GENRE, FILMS_COUNT_PER_CLICK} from "../../utils/constants";
import {filmPropStructure} from "../../utils/validator.prop";

const withVisibleFilms = (Component) => {
  class WithVisibleFilms extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        visibleFilmsCount: FILMS_COUNT_PER_CLICK,
      };

      this.handleMoreButtonClick = this.handleMoreButtonClick.bind(this);
    }

    componentDidUpdate() {
      const {activeGenre} = this.props;

      if (activeGenre !== ALL_GENRE) {
        this.setState({visibleFilmsCount: FILMS_COUNT_PER_CLICK});
      }
    }

    handleMoreButtonClick(params) {
      const {visibleFilmsCount} = this.state;

      this.setState({visibleFilmsCount: visibleFilmsCount + params});
    }

    render() {
      const {promo, handleButtonPlayClick, filteredFilms} = this.props;
      const {visibleFilmsCount} = this.state;
      const films = filteredFilms.slice(0, visibleFilmsCount);
      const isVisibleButtonShowMore = filteredFilms.length > visibleFilmsCount;

      return (
        <Component
          // {...this.props}
          promo={promo}
          handleButtonPlayClick={handleButtonPlayClick}
          films={films}
          isVisibleButtonShowMore={isVisibleButtonShowMore}
          handleMoreButtonClick={this.handleMoreButtonClick}
        />
      );
    }
  }

  WithVisibleFilms.propTypes = {
    activeGenre: PropTypes.string.isRequired,
    promo: PropTypes.shape(filmPropStructure).isRequired,
    handleButtonPlayClick: PropTypes.func.isRequired,
    filteredFilms: PropTypes.arrayOf(filmPropStructure).isRequired,
  };

  return connect(mapStateToProps)(WithVisibleFilms);
};

const mapStateToProps = (state) => ({
  filteredFilms: selectsFilteredFilms(state),
  activeGenre: selectsActiveGenre(state),
});

export default withVisibleFilms;
