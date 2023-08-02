import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

/* To be able to use a state, App is defined as a class */
class App extends Component {
  constructor() {
    /* super() needs to be called before using "this" */
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
    console.log("Constructor finished.");
  }

  componentDidMount() {
    console.log("Component did mount.");
    /* Fetch data from a placeholder website */
    fetch("https://jsonplaceholder.typicode.com/users")
      /* Convert data to json? */
      .then((response) => response.json())
      /* set the users state as the fetched data */
      .then((users) => this.setState({ robots: users }));
  }

  /* onSearchChange function will be called inside <input> inside SearchBox.js, 
  so "this" refers to the <input>. Use arrow syntax to make "this" refer to App */
  onSearchChange = (event) => {
    /* Always set states with this function. event.target.value is the current input value of the search field */
    this.setState({ searchField: event.target.value });
  };

  /* Component has a render function. render() runs again if there is a change in the state. */
  render() {
    console.log("render() running.");
    /* No need to use this.state.robots and this.state.searchField anymore with this destructuring */
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    /* Loading header if fetching data takes long and robots length is 0 */
    if (!robots.length) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          {/* Filtered robot list will be passed as card list prop */}
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
