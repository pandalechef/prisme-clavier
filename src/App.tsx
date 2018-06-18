import * as React from "react";
import "./App.css";

import logo from "./logo.svg";
import ClavierPerso from "./ClavierPerso";
import ClavierHtml5 from "./ClavierHtml5";

interface PropsInterface {}

interface StateInterface {}

class App extends React.Component<PropsInterface, StateInterface> {
  constructor(props: PropsInterface) {
    super(props);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Test clavier</h1>
        </header>
        <br />
        <ClavierPerso valeurInitiale="2.31" />
        <br />
        <br />
        <div>
          <div className="App-intro">Clavier simple Html5</div>
        </div>
        <div>
          <ClavierHtml5 valeurInitiale="2.31" />
        </div>
      </div>
    );
  }
}

export default App;
