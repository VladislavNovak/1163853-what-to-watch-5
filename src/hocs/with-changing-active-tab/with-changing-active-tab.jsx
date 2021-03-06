import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {filmPropStructure} from "../../utils/validator.prop";

import TabOverview from "../../components/tab-overview/tab-overview";
import TabDetails from "../../components/tab-details/tab-details";
import TabReviews from "../../components/tab-reviews/tab-reviews";

// TabsType: OVERVIEW/DETAILS/REVIEWS
import {TabsType} from "../../utils/utils";

const withChangingActiveTab = (Component) => {
  class WithChangingActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TabsType.OVERVIEW,
      };

      this._handleTabClick = this._handleTabClick.bind(this);
      this._renderTabContent = this._renderTabContent.bind(this);
    }

    _handleTabClick(index) {
      this.setState({activeTab: index});
    }

    _renderTabContent() {
      const {film} = this.props;
      const {id, score, level, rating, description, director, starring, runtime, genre, released} = film;

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
              id={id}
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
          renderTabContent={this._renderTabContent}
          handleTabClick={this._handleTabClick}
        />
      );
    }
  }

  WithChangingActiveTab.propTypes = {
    film: PropTypes.shape(filmPropStructure).isRequired,
  };

  return WithChangingActiveTab;
};

export default withChangingActiveTab;
