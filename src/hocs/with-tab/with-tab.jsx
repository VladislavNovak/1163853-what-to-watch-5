import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {filmPropStructure, reviewPropStructure} from "../../utils/validator.prop";

import TabOverview from "../../components/tab-overview/tab-overview";
import TabDetails from "../../components/tab-details/tab-details";
import TabReviews from "../../components/tab-reviews/tab-reviews";

// TabsType: OVERVIEW/DETAILS/REVIEWS
import {TabsType} from "../../utils/utils";

const withTab = (Component) => {
  class WithTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TabsType.OVERVIEW,
      };

      this.handleTabClick = this.handleTabClick.bind(this);
      this.renderTabContent = this.renderTabContent.bind(this);
    }

    handleTabClick(index) {
      this.setState({activeTab: index});
    }

    renderTabContent() {
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
          return (
            <TabReviews
              reviews={reviews}
            />
          );
        default:
          throw new Error(`Something went wrong. No matching tab!`);
      }
    }

    render() {

      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          renderTabContent={this.renderTabContent}
          handleTabClick={this.handleTabClick}
        />
      );
    }
  }

  WithTab.propTypes = {
    film: PropTypes.shape(filmPropStructure).isRequired,
    reviews: PropTypes.arrayOf(reviewPropStructure).isRequired,
  };

  return WithTab;
};

export default withTab;
