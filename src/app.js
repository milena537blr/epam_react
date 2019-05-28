import React from "react";
import "./app.css";

function Component1(props) {
  return <h1>Hello {props.name}!</h1>;
}

class Component2 extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

class Component3 extends React.Component {
  render() {
    return React.createElement('h1', null, `Hello ${this.props.name}!`);
  }
}

class Component4 extends React.PureComponent {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
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