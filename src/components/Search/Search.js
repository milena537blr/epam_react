import React, { Component } from "react";
import PropTypes from 'prop-types';
import s from "./Search.module.scss";
import classNames from "classnames";
import Box from "../Box/Box";
import Button from "../Button/Button";

let searchTitleClass = classNames(s.searchTitle, s.header__searchTitle);

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }

  render() {
    return (
      <div className={s.search}>
        <div className={searchTitleClass}>Find your movie</div>
        <Box marginBottom={4}>
          <input
            className={s.searchInput}
            type="text"
            placeholder="Quentin Tarantino"
            name="search"
            value={this.props.searchText}
            onChange={this.handleSearchTextChange}
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
          <Button text="SEARCH" size="large" color="red" />
        </Box>
      </div>
    );
  }
}

Search.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func
}

export default Search;
