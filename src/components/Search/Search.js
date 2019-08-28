import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Search.module.scss";
import classNames from "classnames";
import { Box } from "../Box/Box";
import { Button } from "../Button/Button";
import { connect } from "react-redux";
import { filterText, searchBy } from "../../actions/actions";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

let searchTitleClass = classNames(s.searchTitle, s.header__searchTitle);

export class Search extends Component {
  constructor(props) {
    super(props);
  }

  findMovies = () => {
    this.props.dispatch(filterText(this.searchInput.value));
  };

  setSearchBy = event => {
    this.props.dispatch(searchBy(event.currentTarget.value));
  };

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

              <div className={s.searchButton}>
                <NavLink
                  activeClassName={s.active}
                  onClick={this.findMovies}
                  to={
                    "/search/Search searchBy=" +
                    this.props.sortBy +
                    "&sortBy=" +
                    this.props.searchBy +
                    "&text=" +
                    this.props.text
                  }
                >
                  Search
                </NavLink>
              </div>
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

function mapStateToProps(state) {
  return {
    searchBy: state.filters.searchBy,
    sortBy: state.filters.sortBy,
    text: state.filters.text
  };
}

export default connect(mapStateToProps)(Search);
