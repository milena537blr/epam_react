import React from "react";
import PropTypes from "prop-types";
import { Header } from "./components/Header/Header";

class Panel extends React.Component {
  render() { 
    return (
      <div>{this.props.name}</div>
    );
  }
}

class Main extends React.Component {
  render() { 
    return (
      <div>{this.props.name}</div>
    );
  }
}

class Footer extends React.Component {
  render() { 
    return (
      <div>{this.props.name}</div>
    );
  }
}

Panel.propTypes = {
  name: PropTypes.string
};

Main.propTypes = {
  name: PropTypes.string
};

Footer.propTypes = {
  name: PropTypes.string
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Header name="netflixroulette" />
        <Panel name="panel" />
        <Main name="main" />
        <Footer name="footer" />
      </div>
    );
  }
}

export { App };
