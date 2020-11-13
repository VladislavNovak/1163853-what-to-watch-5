import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {selectsActiveGenre} from "../../store/reducers/app-state/selectors";
import {ALL_GENRE, FILMS_COUNT_PER_CLICK} from "../../utils/constants";
import {filmPropStructure} from "../../utils/validator.prop";

const withVisibleFilms = (Component) => {
  class WithVisibleFilms extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        visibleFilmsCount: FILMS_COUNT_PER_CLICK,
      };

      this._onMoreButtonClickHandler = this._onMoreButtonClickHandler.bind(this);
      this._resetVisibleFilmsCount = this._resetVisibleFilmsCount.bind(this);
    }

    componentDidMount() {

    }

    _resetVisibleFilmsCount(active) {
      if (active !== ALL_GENRE) {
        this.setState({visibleFilmsCount: FILMS_COUNT_PER_CLICK});
      }
    }

    _onMoreButtonClickHandler(showMoreForViewing) {
      const {visibleFilmsCount} = this.state;

      this.setState({visibleFilmsCount: visibleFilmsCount + showMoreForViewing});
    }

    render() {
      const {promo, onPlayButtonClickHandler} = this.props;
      const {visibleFilmsCount} = this.state;

      return (
        <Component
          {...this.props}
          promo={promo}
          onPlayButtonClickHandler={onPlayButtonClickHandler}
          visibleFilmsCount={visibleFilmsCount}
          onMoreButtonClickHandler={this._onMoreButtonClickHandler}
          resetVisibleFilmsCount={this._resetVisibleFilmsCount}
        />
      );
    }
  }

  WithVisibleFilms.propTypes = {
    promo: PropTypes.shape(filmPropStructure).isRequired,
    onPlayButtonClickHandler: PropTypes.func.isRequired,
  };

  return WithVisibleFilms;
};

export default withVisibleFilms;

// ---------------------------------------------------

// import React, {PureComponent} from "react";
// import PropTypes from "prop-types";
// import {connect} from "react-redux";
// import {selectsActiveGenre} from "../../store/reducers/app-state/selectors";
// import {ALL_GENRE, FILMS_COUNT_PER_CLICK} from "../../utils/constants";
// import {filmPropStructure} from "../../utils/validator.prop";

// const withVisibleFilms = (Component) => {
//   class WithVisibleFilms extends PureComponent {
//     constructor(props) {
//       super(props);

//       this.state = {
//         visibleFilmsCount: FILMS_COUNT_PER_CLICK,
//       };

//       this._onMoreButtonClickHandler = this._onMoreButtonClickHandler.bind(this);
//     }

//     componentDidUpdate() {
//       const {activeGenre} = this.props;

//       if (activeGenre !== ALL_GENRE) {
//         this.setState({visibleFilmsCount: FILMS_COUNT_PER_CLICK});
//       }
//     }

//     _onMoreButtonClickHandler(showMoreForViewing) {
//       const {visibleFilmsCount} = this.state;

//       this.setState({visibleFilmsCount: visibleFilmsCount + showMoreForViewing});
//     }

//     render() {
//       const {promo, onPlayButtonClickHandler} = this.props;
//       const {visibleFilmsCount} = this.state;

//       return (
//         <Component
//           {...this.props}
//           promo={promo}
//           onPlayButtonClickHandler={onPlayButtonClickHandler}
//           visibleFilmsCount={visibleFilmsCount}
//           onMoreButtonClickHandler={this._onMoreButtonClickHandler}
//         />
//       );
//     }
//   }

//   WithVisibleFilms.propTypes = {
//     activeGenre: PropTypes.string.isRequired,
//     promo: PropTypes.shape(filmPropStructure).isRequired,
//     onPlayButtonClickHandler: PropTypes.func.isRequired,
//   };

//   return connect(mapStateToProps)(WithVisibleFilms);
// };

// const mapStateToProps = (state) => ({
//   activeGenre: selectsActiveGenre(state),
// });

// export default withVisibleFilms;
