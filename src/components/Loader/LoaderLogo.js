import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={require(`../../assests/images/HF.png`)}className="raw_logo"></img>
    );
  }
}

export default LogoLoader;
