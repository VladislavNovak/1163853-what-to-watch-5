import React from "react";
import PropTypes from "prop-types";

import {TabsType} from "../../utils/constants";

const TabSwitcher = ({activeTab, renderTabContent, onTabClick}) => {
  return <React.Fragment>
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.entries(TabsType).map(([key, value]) => {
          return (
            <li key={key} className={`movie-nav__item ${activeTab === value ? `movie-nav__item--active` : ``}`}>
              <a className="movie-nav__link" onClick={() => onTabClick(value)}>{value}</a>
            </li>
          );
        })}
      </ul>
    </nav>
    {renderTabContent()}
  </React.Fragment>;
};

TabSwitcher.propTypes = {
  activeTab: PropTypes.string.isRequired,
  renderTabContent: PropTypes.func.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default TabSwitcher;
