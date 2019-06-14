import React from "react";
import PropTypes from "prop-types";
import { Article } from "./components/Article/Article";
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
      cards: [],
      isSearchActive: true
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  componentDidMount() {
    this.makeListCards();
  }

  handleSearchTextChange(searchText) {
    this.setState({
      searchText: searchText
    });
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
      cards: cards,
    });

  }

  handleCardClick() {
    // console.log(card);
    this.setState({
      isSearchActive: true
    });
  }
  
  render() {
    const isSearchActive = this.state.isSearchActive;
    let content;

    if (isSearchActive) {
      content = <Search searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />;
    } else {
      content = <Article card={this.state.data.cards[0]} />;
    }

    return (
      <ErrorBoundary>
        <Header>
          <TopBar />
         {content}
        </Header>
        <Panel />
        <Main onHandleCardClick={this.handleCardClick} searchText={this.state.searchText} cards={this.state.cards} />
        <Footer />
      </ErrorBoundary>
    );
  }
}

App.propTypes = {
  name: PropTypes.string
};

export { App };
