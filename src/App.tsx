import * as React from "react";
import Keyboard from "react-virtual-keyboard";
import "./App.css";

import logo from "./logo.svg";

// tslint:disable-next-line:no-empty-interface
interface IPropsInterface {}

interface IStateInterface {
  input: string | Event;
}

class App extends React.Component<IPropsInterface, IStateInterface> {
  constructor(props: IPropsInterface) {
    super(props);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Keyboard
          name="keyboard"
          options={{
            alwaysOpen: false,
            appendLocally: true,
            color: "light",
            customLayout: {
              meta1: [
                "-90% -80% -70% -60%",
                "-50% -40% -35% -30%",
                "-25% -20% -15% -10%",
                "{meta1}"
              ],
              normal: ["7 8 9", "4 5 6", "1 2 3", "0 . {meta1}"]
            },
            display: {
              meta1: "%"
            },
            initialFocus: true,
            layout: "custom",
            stickyShift: false,
            type: "input",
            updateOnChange: true,
            usePreview: false,
            useWheel: false
          }}
        />
      </div>
    );
  }
}

export default App;
