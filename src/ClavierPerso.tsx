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

  onChange(event?: string | Event, keyboard?: Element, el?: Element) {
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
        onChange={this.onChange}
      />
    );
  }
}
