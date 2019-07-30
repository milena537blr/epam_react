import React from "react";
/* import Article from "../Article/Article";
import Search from "../Search/Search";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import s from "./app.module.scss";
import Logo from "../Logo/Logo";
import Box from "../Box/Box";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import CardsList from "../CardsList/CardsList"; */
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import * as movieActions from "../../actions/movieActions";
// import CatList from "../CatList/CatList";
import { loadMovies } from "../../actions/movieActions";

class App extends React.Component {
 /*  constructor(props) {
    super(props);
    this.cards = this.props.data;

    this.state = {
      searchText: "",
      isSearchActive: true,
      // currentCardId: "1",
      filterText: ""
    };
  }
 */
  componentDidMount() {
    this.props.dispatch(loadMovies());
    // console.log(this.props);
  }

  /* handleCardClick = currentCardId => {
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
  }; */

  render() {
    // console.log(this.props);
    return <div>{JSON.stringify(this.props)}</div>
  }
}

App.propTypes = {
  // data: PropTypes.object,
  // children: PropTypes.object.isRequired
  dispatch: PropTypes.func,
};

function mapStateToProps(state) {
  // console.log(state);
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(App);
