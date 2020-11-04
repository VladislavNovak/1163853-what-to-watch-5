import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {filmPropStructure} from "../../utils/validator.prop";

const withChangingActiveFilm = (Component) => {
  class WithChangingActiveFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.timerID = null;

      this.state = {
        currentActiveFilm: -1,
        blaBla: 0,
      };

      this._handleMouseOverFilm = this._handleMouseOverFilm.bind(this);
      this._handleMouseLeaveFilm = this._handleMouseLeaveFilm.bind(this);
    }

    _handleMouseOverFilm(id) {
      if (this.timerID !== null) {
        clearTimeout(this.timerID);
      }

      this.timerID = setTimeout(() => this.setState({currentActiveFilm: id}), 1000);
    }

    _handleMouseLeaveFilm() {
      this.setState({currentActiveFilm: -1});
      clearTimeout(this.timerID);
      this.timerID = null;
    }

    componentWillUnmount() {
      if (this.timerID) {
        clearTimeout(this.timerID);
      }
    }

    render() {

      return (
        <Component
          {...this.props}
          currentActiveFilm={this.state.currentActiveFilm}
          handleMouseOverFilm={this._handleMouseOverFilm}
          handleMouseLeaveFilm={this._handleMouseLeaveFilm}
        />
      );
    }
  }

  WithChangingActiveFilm.propTypes = {
    films: PropTypes.arrayOf(filmPropStructure).isRequired,
  };

  return WithChangingActiveFilm;
};

export default withChangingActiveFilm;
