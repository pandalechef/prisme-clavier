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

  beforeVisible(event: string | Event) {
    // tslint:disable-next-line:no-string-literal
    console.log("event ", event["currentTarget"]["readOnly"]);
    document.getElementsByName("keyboard")[0].setAttribute("readOnly", "true");
    // tslint:disable-next-line:no-string-literal
    console.log("event ", event["currentTarget"]["readOnly"]);
  }

  beforeClose(event: string | Event) {
    // tslint:disable-next-line:no-string-literal
    console.log("event ", event["currentTarget"]["readOnly"]);
    document.getElementsByName("keyboard")[0].removeAttribute("readOnly");
    // tslint:disable-next-line:no-string-literal
    console.log("event ", event["currentTarget"]["readOnly"]);
  }

  onInputChange(event?: string | Event) {
    console.log("event", event);
  }

  public render() {
    return (
      <Keyboard
        value={this.state.input}
        name="keyboard"
        options={{
          openOn: "click",
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
          useWheel: false,
          beforeVisible: this.beforeVisible,
          beforeClose: this.beforeClose,
          userClosed: false
        }}
        onChange={this.onInputChange}
      />
    );
  }
}
