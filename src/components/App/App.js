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

    let cards = this.props.data.cards.map(item => {
      return {
        name: item.name,
        date: item.date,
        genre: item.genre,
        id: item.id
      };
    });

    this.state = {
      data: this.props.data,
      listCards: [],
      searchText: "",
      cards,
      isSearchActive: true,
      currentCard: {},
      filterText: ""
    };
  }

  handleSearchTextChange = searchText => {
    this.setState({ searchText });
  };

  handleCardClick = currentCardId => {
    this.setState({
      isSearchActive: false
    });

    this.state.data.cards.forEach(currentCard => {
      if (currentCard.id === currentCardId) {
        this.setState({ currentCard });
        return;
      }
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
                area-label="Display search area"
                size="large"
                color="white"
                data-testid="search-switcher"
              />
            </Box>
            {isSearchActive ? (
              <Search
                searchText={this.state.searchText}
                onSearchTextChange={this.handleSearchTextChange}
              />
            ) : (
              <Article card={this.state.currentCard} />
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
              {this.state.cards.map(card => {
                return (
                  <Card
                    cardClick={() => this.handleCardClick(card.id)}
                    card={card}
                    key={card.id}
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
