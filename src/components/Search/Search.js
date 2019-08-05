import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Search.module.scss";
import classNames from "classnames";
import Box from "../Box/Box";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { filterText } from "../../actions/movieActions";

let searchTitleClass = classNames(s.searchTitle, s.header__searchTitle);

class Search extends Component {
  constructor(props) {
    super(props);
  }

  findMovies = () => {
    this.props.dispatch(filterText(this.searchInput.value));
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
                // value={this.props.searchText}
                // onChange={this.handleSearchTextChange}
                aria-label="Search"
                aria-labelledby="searchButton"
              />
            </Box>
            <Box align="space-between" verticalAlign="middle">
              <Box align="space-between" verticalAlign="middle">
                <div className={s.searchLabel}>search by</div>
                <Box marginRight={2}>
                  <Button text="title" size="medium" color="red" />
                </Box>
                <Box marginRight={2}>
                  <Button text="genre" size="medium" color="gray" />
                </Box>
              </Box>
              <Button
                handleClick={this.findMovies}
                id="searchButton"
                text="SEARCH"
                size="large"
                color="red"
              />
            </Box>
          </fieldset>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  onFindMovie: PropTypes.func,
  dispatch: PropTypes.func.isRequired
};

export default connect()(Search);
