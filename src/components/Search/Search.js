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
    this.textInput = React.createRef();
    this.state = { urlText: "", urlSearchBy: "title", urlSortBy: "" };
  }

  setSearchBy = event => {
    this.setState({ urlSearchBy: event.currentTarget.value });
  };

  componentDidUpdate() {
    if (this.props.location) {
      const { pathname } = this.props.location;

      const params = parseUrl(pathname);

      if (params) {
        if (params["text"]) {
          this.props.dispatch(filterText(params["text"]));
        } else {
          this.props.dispatch(filterText(""));
        }

        if (params["searchBy"]) {
          this.props.dispatch(searchBy(params["searchBy"]));
        }
      }
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
                ref={this.textInput}
                onChange={() => {
                  this.setState({
                    urlText: this.textInput.current
                      ? this.textInput.current.value
                      : ""
                  });
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
                    color={this.state.urlSearchBy === "title" ? "red" : "gray"}
                  />
                </Box>
                <Box marginRight={2}>
                  <Button
                    dataTestId="search-by-genre"
                    buttonValue="genre"
                    handleClick={this.setSearchBy}
                    text="genre"
                    size="medium"
                    color={this.state.urlSearchBy === "genre" ? "red" : "gray"}
                  />
                </Box>
              </Box>

              <Link
                to={
                  "/search/Search searchBy=" +
                  this.state.urlSearchBy +
                  "&sortBy=" +
                  this.props.sortBy +
                  "&text=" +
                  this.state.urlText
                }
              >
                <Button text="Search" size="large" color="red" />
              </Link>
            </Box>
          </fieldset>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func,
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
