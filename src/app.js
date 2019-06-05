import React from "react";
import PropTypes from "prop-types";
import s from "./app.module.scss";
import Box from "./components/Box/Box";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";
import { Sorter } from "./components/Sorter/Sorter";
import { Logo } from "./components/Logo/Logo";
import classNames from "classnames";
import cardImage from "./images/card.jpg";

let searchTitleClass = classNames(s.searchTitle, s.header__searchTitle);
const cards = [
  {
    date: 2007,
    name: "Vampire diaries",
    genre: "Dramas",
    image: cardImage
  },
  {
    date: 2011,
    name: "Vampire diaries 2",
    genre: "American drama series",
    image: cardImage
  },
  {
    date: 2008,
    name: "Twilight",
    genre: "Drama/Fantasy",
    image: cardImage
  },
  {
    date: 2007,
    name: "Vampire diaries",
    genre: "Dramas",
    image: cardImage
  },
  {
    date: 2011,
    name: "Vampire diaries 2",
    genre: "American drama series",
    image: cardImage
  },
  {
    date: 2008,
    name: "Twilight",
    genre: "Drama/Fantasy",
    image: cardImage
  }
];

class App extends React.Component {
  render() {
    let listCards = cards.map((card, index) => 
      <Card key={index} card={card} />
    );
    return (
      <React.Fragment>
        <header className={s.header}>
          <div className={s.overlay} />
          <section className={s.container}>
            <Box align="space-between" verticalAlign="middle">
              <Logo />
              <Button text="SEARCH" size="large" color="white" />
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
                    <Button text="title" size="medium" color="red" />
                  </Box>
                  <Box marginRight={2}>
                    <Button text="genre" size="medium" color="gray" />
                  </Box>
                </Box>
                <Button text="SEARCH" size="large" color="red" />
              </Box>
            </div>
          </section>
        </header>
        <section className={s.panel}>
          <Box
            align="space-between"
            verticalAlign="middle"
            className={s.container}
          >
            <div>7 movies found</div>
            <Sorter />
          </Box>
        </section>
        <main className={s.main}>
          <div className={s.container}>
            <Box className={s.wrapper} align="center">
              {listCards}
            </Box>
          </div>
        </main>
        <footer className={s.footer}>
          <div className={s.container}>
            <Logo />
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  name: PropTypes.string
};

export { App };
