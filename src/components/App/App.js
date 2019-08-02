import React from "react";
import Article from "../Article/Article";
import Search from "../Search/Search";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import s from "./app.module.scss";
import Logo from "../Logo/Logo";
import Box from "../Box/Box";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import CardsList from "../CardsList/CardsList";
import { connect } from "react-redux";
import { loadMovies } from "../../actions/movieActions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(loadMovies());
  }

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
              <Route
                path="/search"
                render={() => <Search />}
              />
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
              <Switch>
                <Route
                  path="/(search?|film?)"
                  render={() => <CardsList cards={this.props.movies} />}
                />
                <Route component={NotFound} />
              </Switch>
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
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

export default connect(mapStateToProps)(App);
