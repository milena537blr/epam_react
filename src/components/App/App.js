import React from "react";
import Article from "../Article/Article";
import Search from "../Search/Search";
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import s from "./app.module.scss";
import { Logo } from "../Logo/Logo";
import { Box } from "../Box/Box";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { CardsList } from "../CardsList/CardsList";
import { connect } from "react-redux";
import { loadMovies, sortBy } from "../../actions/actions";
import { Loading } from "../../components/Loading/Loading";
import registerServiceWorker from '../../registerServiceWorker';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(loadMovies());
    console.log(caches);
    registerServiceWorker();
  }

  setSorter = event => {
    this.props.dispatch(sortBy(event.currentTarget.value));
  };

  render() {
    return (
      <ErrorBoundary>
        <header className={s.header}>
          <div className={s.overlay} />
          <section className={s.container}>
            <Box align="space-between" verticalAlign="middle" marginBottom={8}>
              <Logo />
              <Link to={"/search"}>
                <Button
                  text="SEARCH"
                  areaLabel="Display search area"
                  size="large"
                  color="white"
                  dataTestId="search-switcher"
                />
              </Link>
            </Box>
            <Switch>
              <Route path="/" exact component={Search} />
              <Route path="/search" render={() => <Search />} />
              <Route path="/film/:id" component={Article} />
              <Route component={Search} />
            </Switch>
          </section>
        </header>
        <section className={s.panel}>
          <Box
            align="space-between"
            verticalAlign="middle"
            className={s.container}
          >
            <div>{this.props.movies.length} movies found</div>
            <div>
              <span>Sort by </span>
              <Button
                text="release date"
                buttonValue="release_date"
                handleClick={this.setSorter}
              />
              <Button
                text="rating"
                buttonValue="rating"
                handleClick={this.setSorter}
              />
            </div>
          </Box>
        </section>
        <main className={s.main}>
          <div className={s.container}>
            <Box className={s.wrapper} align="center">
              {this.props.error ? (
                <div
                  data-testid="errorMessage"
                  style={{ color: "#f95a6d", fontSize: "50px" }}
                >
                  ERROR: {this.props.error}
                </div>
              ) : (
                ""
              )}
              {this.props.loading ? (
                <Loading />
              ) : (
                <Switch>
                  <Route
                    path="/(search?|film?)"
                    render={() => <CardsList cards={this.props.movies} />}
                  />
                  <Route component={NotFound} />
                </Switch>
              )}
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
  movies: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string
};

const getVisibleMovies = (movies, { text, sortBy, searchBy }) => {
  return movies
    .filter(movie => {
      switch (searchBy) {
        case "title":
          return movie.title.includes(text);
        case "genre":
          return text ? movie.genres.find(genre => genre === text) : movie;
        default:
          return movie.title.includes(text);
      }
    })
    .sort((movie1, movie2) => {
      switch (sortBy) {
        case "rating":
          return movie1.vote_average - movie2.vote_average;
        case "release_date":
          return new Date(movie1.release_date) - new Date(movie2.release_date);
        default:
          return movie1.vote_average - movie2.vote_average;
      }
    });
};

const mapStateToProps = state => ({
  movies: getVisibleMovies(state.data.movies, state.filters),
  loading: state.data.loading,
  error: state.data.error
});

export default connect(mapStateToProps)(App);
