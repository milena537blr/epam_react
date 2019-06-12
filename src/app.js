import React from "react";
import PropTypes from "prop-types";
import Card from "./components/Card/Card";
// import { Article } from "./components/Article/Article";
import Search from "./components/Search/Search";
import data from "./data/data.json";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import TopBar from "./components/TopBar/TopBar";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Panel from './components/Panel/Panel';
import Main from './components/Main/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      listCards: [],
      searchText: '',
    };
  }

  componentDidMount() {
    this.makeListCards();
  }

  makeListCards() {
    let cards = [];
    this.state.data.cards.forEach(item => {
      let card = {
        name: item.name,
        date: item.date,
        genre: item.genre
      };
      cards.push(card);
    });

    this.setState({
      listCards: cards.map((card, index) => <Card key={index} card={card} />)
    });
  }

  render() {
    return (
      <ErrorBoundary>
        <Header>
          <TopBar />
          {/* <Article card={this.state.data.cards[0]} /> */}
          <Search searchText={this.state.searchText} />
        </Header>
        <Panel />
        <Main searchText={this.state.searchText}>
          {this.state.listCards}
        </Main>
        <Footer />
      </ErrorBoundary>
    );
  }
}

App.propTypes = {
  name: PropTypes.string
};

export { App };
