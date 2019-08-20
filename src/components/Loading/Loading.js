import React from "react";
import s from "./Loading.module.scss";

class Loading extends React.Component {
  render() {
    return <div className={s.loading}>Loading...</div>;
  }
}

export { Loading };