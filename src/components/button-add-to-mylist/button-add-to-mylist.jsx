import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {sendUpdatedFavoriteStatus} from "../../store/api-action";

class ButtonAddToMylist extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isFavoriteFilm: false,
    }

    this._handleChangingStatusButtonClick = this._handleChangingStatusButtonClick.bind(this);
  }

  _handleChangingStatusButtonClick() {
    this.setState({isFavoriteFilm: !this.state.isFavoriteFilm});

    let {updateFavoriteStatusFilm, id, inMyFavoriteList: status} = this.props;
    status = Number(status);
    console.log(`id = ${id}`);
    console.log(`status = ${status}`);
    updateFavoriteStatusFilm(id, status);
  }

  render() {
    const {isFavoriteFilm} = this.state;
    return (
      <button
        className="btn btn--list movie-card__button"
        type="button"
        onClick={this._handleChangingStatusButtonClick}
      >
        {isFavoriteFilm
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
})

export {ButtonAddToMylist};
export default connect(null, mapDispatchToProps)(ButtonAddToMylist);
