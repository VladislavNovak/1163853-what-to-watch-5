import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {reviewPropStructure} from "../../utils/validator.prop";
import {fetchReviews} from "../../store/api-action";
import {selectsReviews} from "../../store/reducers/app-state/selectors";

import Review from "../review/review";
import {connect} from "react-redux";

class TabReviews extends PureComponent {

  componentDidMount() {
    const {getReviews, id} = this.props;
    getReviews(id);
  }

  render() {
    const {reviews} = this.props;

    const colLeft = reviews.filter((_, index) => index % 2 === 0);
    const colRight = reviews.filter((_, index) => index % 2 !== 0);

    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {colLeft.map(({id, user, rating, comment, date}) => (
            <Review
              key={`${id}`}
              quote={comment}
              author={`${user.id} ${user.name}`}
              datetime={date}
              rating={rating}
            />
          ))}
        </div>
        <div className="movie-card__reviews-col">
          {colRight.map(({id, user, rating, comment, date}) => (
            <Review
              key={`${id}`}
              quote={comment}
              author={`${user.id} ${user.name}`}
              datetime={date}
              rating={rating}
            />
          ))}
        </div>
      </div>
    );
  }
}

TabReviews.propTypes = {
  id: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(reviewPropStructure).isRequired,
  getReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({reviews: selectsReviews(state)});

const mapDispatchToProps = (dispatch) => ({
  getReviews(id) {
    dispatch(fetchReviews(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TabReviews);
