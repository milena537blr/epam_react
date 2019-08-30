import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Search.module.scss";
import classNames from "classnames";
import { Box } from "../Box/Box";
import { Button } from "../Button/Button";
import { connect } from "react-redux";
import { filterText, searchBy, sortBy } from "../../actions/actions";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { parseUrl } from "../../utils/parseUrl";

let searchTitleClass = classNames(s.searchTitle, s.header__searchTitle);

export class Search extends Component {
  constructor(props) {
    super(props);
  }

  findMovies = event => {
      this.props.dispatch(filterText(event.target.value));
  };

  setSearchBy = event => {
    this.props.dispatch(searchBy(event.currentTarget.value));
  };

  componentDidMount() {
    const { pathname } = this.props.location;

    const params = parseUrl(pathname);

    if (params["text"]) {
      this.props.dispatch(filterText(params["text"]));
    }

    if (params["searchBy"]) {
      this.props.dispatch(searchBy(params["searchBy"]));
    }

    if (params["sortBy"]) {
      this.props.dispatch(sortBy(params["sortBy"]));
    }
  }

  render() {
    return (
      <div className={s.search} data-testid="search">
        <form>
          <fieldset>
            <legend className={searchTitleClass}>Find your movie</legend>
            <Box marginBottom={4}>
              <input
                ref={input => {
                  this.searchInput = input;
                }}
                onChange={this.findMovies.bind(this)}
                className={s.searchInput}
                type="text"
                placeholder="Quentin Tarantino"
                name="search"
                aria-label="Search"
                aria-labelledby="searchButton"
              />
            </Box>
            <Box align="space-between" verticalAlign="middle">
              <Box align="space-between" verticalAlign="middle">
                <div className={s.searchLabel}>search by</div>
                <Box marginRight={2}>
                  <Button
                    dataTestId="search-by-title"
                    buttonValue="title"
                    handleClick={this.setSearchBy}
                    text="title"
                    size="medium"
                    color={this.props.searchBy === "title" ? "red" : "gray"}
                  />
                </Box>
                <Box marginRight={2}>
                  <Button
                    dataTestId="search-by-genre"
                    buttonValue="genre"
                    handleClick={this.setSearchBy}
                    text="genre"
                    size="medium"
                    color={this.props.searchBy === "genre" ? "red" : "gray"}
                  />
                </Box>
              </Box>

              <Link
                to={
                  "/search/Search searchBy=" +
                  this.props.searchBy +
                  "&sortBy=" +
                  this.props.sortBy +
                  "&text=" +
                  this.props.text
                }
              >
                <Button
                  text="Search"
                  size="large"
                  color="red"
                  // handleClick={this.findMovies}
                />
              </Link>
            </Box>
          </fieldset>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  searchBy: PropTypes.string,
  sortBy: PropTypes.string,
  text: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    searchBy: state.filters.searchBy,
    sortBy: state.filters.sortBy,
    text: state.filters.text
  };
}

export default connect(mapStateToProps)(Search);
