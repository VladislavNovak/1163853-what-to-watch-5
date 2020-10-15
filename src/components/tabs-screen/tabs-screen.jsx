import React, {PureComponent} from "react";

import PageOverviewScreen from "../page-overview-screen/page-overview-screen";

// TabsType: OVERVIEW/DETAILS/REVIEW
import {TabsType} from "../../utils/utils";

class TabsScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TabsType.OVERVIEW,
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(index) {
    this.setState({activeTab: index});
  }

  renderTabContent() {
    const {film} = this.props;

    switch (this.state.activeTab) {
      case TabsType.OVERVIEW:
        return <PageOverviewScreen score={film.score} level={film.level} rating={film.rating} description={film.description} director={film.director} starring={film.starring} />
      case TabsType.DETAILS:
        console.log(`Секция DETAILS`)
        break;
      case TabsType.REVIEW:
        console.log(`Секция REVIEW`)
        break;
      default:
        break;
    }
  }

  render() {
    return <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.entries(TabsType).map(([key, value]) => {
            return (
              <li key={key} className={`movie-nav__item ${this.state.activeTab === value ? `movie-nav__item--active` : ``}`}>
                <a className="movie-nav__link" onClick={() => this.handleTabClick(value)}>{value}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      {this.renderTabContent()}
    </React.Fragment>;
  }
}


export default TabsScreen;
