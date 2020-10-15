import React, {PureComponent} from "react";

// TabsType: OVERVIEW/DETAILS/REVIEW
import {TabsType} from "../../utils/utils";

class TabsScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(index) {
    this.setState({activeTab: index});
  }

  render() {
    return (
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.entries(TabsType).map(([key, value], index) => {
            return (
              <li key={key} className="movie-nav__item movie-nav__item--active">
                <a className="movie-nav__link" onClick={() => this.handleTabClick(index)}>{value}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}


export default TabsScreen;
