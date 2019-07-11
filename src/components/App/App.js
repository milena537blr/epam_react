import React from "react";
import Article from "../Article/Article";
import Search from "../Search/Search";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import s from "./app.module.scss";
import Logo from "../Logo/Logo";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Card from "../Card/Card";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.cards = this.props.data;

    this.state = {
      searchText: "",
      isSearchActive: true,
      currentCardId: "1",
      filterText: ""
    };
  }

  /* createCardsMap() {
    let cardMap = new Map();
    let cards = this.props.data;

    for (let key in cards) {
      cardMap.set(key, cards[key]);
    }
    console.log(cardMap);
  } */

  handleSearchTextChange = searchText => {
    this.setState({ searchText });
  };

  handleCardClick = currentCardId => {
    this.setState({
      isSearchActive: false,
      currentCardId
    });
  };

  handleSearchClick = () => {
    this.setState({
      isSearchActive: true
    });
  };

  render() {
    const isSearchActive = this.state.isSearchActive;

    return (
      <ErrorBoundary>
        <header className={s.header}>
          <div className={s.overlay} />
          <section className={s.container}>
            <Box align="space-between" verticalAlign="middle" marginBottom={8}>
              <Logo />
              <Button
                onHandleSearchClick={this.handleSearchClick}
                text="SEARCH"
                areaLabel="Display search area"
                size="large"
                color="white"
                dataTestId="search-switcher"
              />
            </Box>
            {isSearchActive ? (
              <Search
                searchText={this.state.searchText}
                onSearchTextChange={this.handleSearchTextChange}
              />
            ) : (
              <Article card={this.cards[this.state.currentCardId]} />
            )}
          </section>
        </header>
        <section className={s.panel}>
          <Box
            align="space-between"
            verticalAlign="middle"
            className={s.container}
          >
            <div>7 movies found</div>
            <div>
              <span>Sort by </span>
              <span>release date </span>
              <span>rating</span>
            </div>
          </Box>
        </section>
        <main className={s.main}>
          <div className={s.container}>
            <Box className={s.wrapper} align="center">
              {Object.keys(this.cards).map(id => {
                return (
                  <Card
                    cardClick={() => this.handleCardClick(id)}
                    card={this.cards[id]}
                    key={id}
                  />
                );
              })}
            </Box>
          </div>
        </main>
        <footer className={s.footer}>
          <div className={s.container}>
            <Logo />
          </div>
        </footer>
      </ErrorBoundary>
    );
  }
}

App.propTypes = {
  data: PropTypes.object
};

export default App;
