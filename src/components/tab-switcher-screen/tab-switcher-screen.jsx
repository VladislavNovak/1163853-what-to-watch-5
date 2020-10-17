import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import TabOverviewScreen from "../tab-overview-screen/tab-overview-screen";
import TabDetailsScreen from "../tab-details-screen/tab-details-screen";
import TabReviewsScreen from "../tab-reviews-screen/tab-reviews-screen";

// TabsType: OVERVIEW/DETAILS/REVIEWS
import {TabsType} from "../../utils/utils";

class TabSwitcherScreen extends PureComponent {
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
    const {film, reviews} = this.props
    const {score, level, rating, description, director, starring, runtime, genre, released} = film;

    switch (this.state.activeTab) {
      case TabsType.OVERVIEW:
        return (
          <TabOverviewScreen
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
          <TabDetailsScreen
            director={director}
            starring={starring}
            runtime={runtime}
            genre={genre}
            released={released}
          />
        );
      case TabsType.REVIEWS:
        return <TabReviewsScreen reviews={reviews} />;
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

TabSwitcherScreen.propTypes = {
  film: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default TabSwitcherScreen;
