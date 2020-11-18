import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sendUpdatedFavoriteStatus} from "../../store/api-action";

class ButtonAddToMylist extends PureComponent {
  constructor(props) {
    super(props);
    this._handleChangingStatusButtonClick = this._handleChangingStatusButtonClick.bind(this);
  }

  _handleChangingStatusButtonClick() {
    const {updateFavoriteStatusFilm, id, inMyFavoriteList} = this.props;

    updateFavoriteStatusFilm(id, Number(!inMyFavoriteList));
  }

  render() {
    const {inMyFavoriteList} = this.props;
    return (
      <button
        className="btn btn--list movie-card__button"
        type="button"
        onClick={this._handleChangingStatusButtonClick}
      >
        {inMyFavoriteList
          ? (
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list" />
            </svg>
          )
          : (
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add" />
            </svg>
          )
        }
        <span>My list</span>
      </button>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateFavoriteStatusFilm(id, status) {
    dispatch(sendUpdatedFavoriteStatus(id, status));
  }
});

ButtonAddToMylist.propTypes = {
  updateFavoriteStatusFilm: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  inMyFavoriteList: PropTypes.bool.isRequired,
};

export {ButtonAddToMylist};
export default connect(null, mapDispatchToProps)(ButtonAddToMylist);