import React from "react";
import PropTypes from "prop-types";
import s from "./Header.module.scss";
import Box from "../Box/Box";
import classNames from "classnames";

let buttonWhiteClass = classNames(s.button, s.white);
let buttonRedClass = classNames(s.button, s.red);
let buttonGrayClass = classNames(s.button, s.gray);
let buttonRedLargeClass = classNames(s.button, s.red, s.large);
let searchTitleClass = classNames(s.searchTitle, s.header__searchTitle);

class Header extends React.Component {
  render() {
    return (
      <header className={s.header}>
        <div className={s.overlay} />
        <section className={s.container}>
          <Box align="space-between" verticalAlign="middle">
            <a className={s.logo} href="#">
              {this.props.name}
            </a>
            <button className={buttonWhiteClass} type="submit">
              SEARCH
            </button>
          </Box>
          <div className={s.search}>
            <div className={searchTitleClass}>Find your movie</div>
            <Box marginBottom={4}>
              <input
                className={s.searchInput}
                type="text"
                placeholder="Quentin Tarantino"
                name="search"
              />
            </Box>
            <Box align="space-between" verticalAlign="middle">
              <Box align="space-between" verticalAlign="middle">
                <div className={s.searchLabel}>search by</div>
                <Box marginRight={2}>
                  <button className={buttonRedClass} type="submit">
                    title
                  </button>
                </Box>
                <Box marginRight={2}>
                  <button className={buttonGrayClass} type="submit">
                    genre
                  </button>
                </Box>
              </Box>
              <button className={buttonRedLargeClass} type="submit">
                SEARCH
              </button>
            </Box>
          </div>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string
};

export { Header };
