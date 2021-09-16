import "./App.css";
import React from "react";
import Header from "./component/Header";
import Card from "./component/Card";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allStars: null,
      lang: "language",
    };
  }
  handleLanguage = (lang) => {
    this.setState((prevState) => {
      return {
        lang: lang,
      };
    });
  };
  componentDidMount() {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+css:JavaScript&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          allStars: data.items,
        });
      });
  }
  render() {
    return (
      <>
        <Header
          allStars={this.state.allStars}
          handleLanguage={this.handleLanguage}
        />
        {this.state.allStars ? <Card allStars={this.state.allStars} /> : null}
      </>
    );
  }
}

export default App;
