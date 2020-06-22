import React from "react";
import logo from "./logo.svg";
import "./App.css";

// App.js
import { useQuery, gql } from "@apollo/client";

// App.js
/**
 * Imports
 * 1) 'useQuery' is a React hook
 * 2) 'gql' a function to pass in GraphQL syntax via a tagged template literal
 * https://thinkster.io/tutorials/up-and-running-with-gatsby-styling/using-styled-components */
const HABITS_QUERY = gql`
  query HABITS_QUERY {
    habits {
      id
      description
      points
    }
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
