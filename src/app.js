import React from "react";
import PropTypes from "prop-types";
import s from "./app.module.scss";
import Box from "./components/Box/Box";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";
import { Sorter } from "./components/Sorter/Sorter";
import { Logo } from "./components/Logo/Logo";
// import { Article } from "./components/Article/Article";
import Search from "./components/Search/Search";
import data from "./data/data.json";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
const cards = data.cards;

class App extends React.Component {
  render() {
    let listCards = cards.map((card, index) => (
      <Card key={index} card={card} />
    ));
    return (
      <React.Fragment>
        <ErrorBoundary>
          <header className={s.header}>
            <div className={s.overlay} />
            <section className={s.container}>
              <Box
                align="space-between"
                verticalAlign="middle"
                marginBottom={8}
              >
                <Logo />
                <Button text="SEARCH" size="large" color="white" />
              </Box>
              {/* <Article card={cards[0]} /> */}
              <Search />
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
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  name: PropTypes.string
};

export { App };
