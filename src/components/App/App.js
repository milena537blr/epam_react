import React from "react";
import Article from "../Article/Article";
import Search from "../Search/Search";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import s from "./app.module.scss";
import Logo from "../Logo/Logo";
import Box from "../Box/Box";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import CardsList from "../CardsList/CardsList";
import { connect } from "react-redux";
import * as movieActions from "../../actions/movieActions";
import CatList from "../CatList/CatList";
import { loadMovies } from "../../actions/movieActions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.cards = this.props.data;

    this.state = {
      searchText: "",
      isSearchActive: true,
      // currentCardId: "1",
      filterText: ""
    };
  }

  componentDidMount() {
    this.props.dispatch(loadMovies());
  }

  handleCardClick = currentCardId => {
    this.setState({
      isSearchActive: false,
      currentCardId
    });
  };

  handleSearchTextChange = searchText => {
    this.setState({ searchText });
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
            {console.log(this.props.movies)}
            {console.log(this.state)}
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
            <CatList cats={this.props.movies}/>
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
              <Route path="/" exact component={NotFound} />
              <Route
                path="/search"
                render={props => (
                  <CardsList
                    {...props}
                    // cards={this.cards}
                    cards={this.props.movies}
                    handleCardClick={this.handleCardClick}
                  />
                )}
              />
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

/* App.propTypes = {
  data: PropTypes.object,
  children: PropTypes.object.isRequired
}; */

function mapStateToProps(state) {
  // console.log(state);
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(App);
