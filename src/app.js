import React from 'react';
// import PropTypes from 'prop-types';
import Article from './components/Article/Article';
import Search from './components/Search/Search';
import data from './data/data.json';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Panel from './components/Panel/Panel';
import Main from './components/Main/Main';

class App extends React.Component {
  constructor (props) {
    super (props);

    let cards = data.cards.map (item => {
      return {
        name: item.name,
        date: item.date,
        genre: item.genre,
        id: item.id,
      };
    });

    this.state = {
      data,
      listCards: [],
      searchText: '',
      cards,
      isSearchActive: true,
      currentCard: {},
    };
  }

  handleSearchTextChange = searchText => {
    this.setState ({searchText});
  };

  handleCardClick = currentCardId => {
    this.setState ({
      isSearchActive: false,
    });

    this.state.data.cards.forEach (currentCard => {
      if (currentCard.id === currentCardId) {
        this.setState ({currentCard});
        return;
      }
    });
  };

  handleSearchClick = () => {
    this.setState ({
      isSearchActive: true,
    });
  };

  render () {
    const isSearchActive = this.state.isSearchActive;

    return (
      <ErrorBoundary>
        <Header>
          <TopBar onHandleSearchClick={this.handleSearchClick} />
          {isSearchActive
            ? <Search
                searchText={this.state.searchText}
                onSearchTextChange={this.handleSearchTextChange}
              />
            : <Article card={this.state.currentCard} />}
        </Header>
        <Panel />
        <Main
          onHandleCardClick={this.handleCardClick}
          searchText={this.state.searchText}
          cards={this.state.cards}
        />
        <Footer />
      </ErrorBoundary>
    );
  }
}

/* App.propTypes = {
  name: PropTypes.string,
}; */

export default App;
