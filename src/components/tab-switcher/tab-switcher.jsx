import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";

import {filmPropStructure, reviewPropStructure} from "../../utils/validator.prop";

// TabsType: OVERVIEW/DETAILS/REVIEWS
import {TabsType} from "../../utils/utils";

class TabSwitcher extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TabsType.OVERVIEW,
    };

    this._handleTabClick = this._handleTabClick.bind(this);
  }

  _handleTabClick(index) {
    this.setState({activeTab: index});
  }

  _renderTabContent() {
    const {film, reviews} = this.props;
    const {score, level, rating, description, director, starring, runtime, genre, released} = film;

    switch (this.state.activeTab) {
      case TabsType.OVERVIEW:
        return (
          <TabOverview
            score={score}
            level={level}
            rating={rating}
            description={description}
            director={director}
            starring={starring}
          />
        );
      case TabsType.DETAILS:
        return (
          <TabDetails
            director={director}
            starring={starring}
            runtime={runtime}
            genre={genre}
            released={released}
          />
        );
      case TabsType.REVIEWS:
        return <TabReviews reviews={reviews} />;
      default:
        throw new Error(`Something went wrong. No matching tab!`);
    }
  }

  render() {
    return <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.entries(TabsType).map(([key, value]) => {
            return (
              <li key={key} className={`movie-nav__item ${this.state.activeTab === value ? `movie-nav__item--active` : ``}`}>
                <a className="movie-nav__link" onClick={() => this._handleTabClick(value)}>{value}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      {this._renderTabContent()}
    </React.Fragment>;
  }
}

TabSwitcher.propTypes = {
  film: PropTypes.shape(filmPropStructure).isRequired,
  reviews: PropTypes.arrayOf(reviewPropStructure).isRequired,
};

export default TabSwitcher;
