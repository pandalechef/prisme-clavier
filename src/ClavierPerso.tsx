import * as React from "react";
import Keyboard from "react-virtual-keyboard";

// tslint:disable-next-line:no-empty-interface
interface PropsInterface {}

interface StateInterface {
  input: string;
}
export default class ClavierPerso extends React.Component<
  PropsInterface,
  StateInterface
> {
  constructor(props: PropsInterface) {
    super(props);
    this.state = { input: "" };
  }

  componentDidMount() {
    document.getElementsByName("keyboard")[0].setAttribute("readonly", "true");
  }

  onInputChange(event?: string | Event, keyboard?: Element, el?: Element) {
    console.log("event", event);
    console.log("el", el);
    console.log("keyboard", keyboard);
  }

  public render() {
    return (
      <Keyboard
        value={this.state.input}
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
              "{normal}"
            ],
            normal: ["7 8 9", "4 5 6", "1 2 3", "0 . -", "{meta1} {b}"]
          },
          display: {
            meta1: "%",
            b: "<",
            normal: "123"
          },
          initialFocus: true,
          layout: "custom",
          stickyShift: false,
          type: "input",
          updateOnChange: false,
          usePreview: false,
          useWheel: false
        }}
        onChange={this.onInputChange}
      />
    );
  }
}
