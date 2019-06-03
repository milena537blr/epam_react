import React from "react";
import "./app.css";
import PropTypes from 'prop-types';

function Component1(props) {
  if (props.name) {
    return <h1>Hello {props.name}!</h1>;
  }
}

class Component2 extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

Component2.propTypes = {
  name: PropTypes.string
}

class Component3 extends React.Component {
  render() {
    return React.createElement('h1', null, `Hello ${this.props.name}!`);
  }
}

Component3.propTypes = {
  name: PropTypes.string
}

class Component4 extends React.PureComponent {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

Component4.propTypes = {
  name: PropTypes.string
}

function App() {
  return (
    <div>
      <Component1 name="functional component" />
      <Component2 name="React.Component" />
      <Component4 name="PureComponent" />
    </div>
  );
}

export { App, Component3 };