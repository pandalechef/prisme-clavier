import * as React from "react";
import Keyboard from "react-virtual-keyboard";

// tslint:disable-next-line:no-empty-interface
interface PropsInterface {
  initialValue: string;
}

interface StateInterface {
  prixInitial: string;
  input: string;
  prix: string;
}
export default class ClavierPerso extends React.Component<
  PropsInterface,
  StateInterface
> {
  keyboard: Keyboard | null;
  constructor(props: PropsInterface) {
    super(props);
    this.state = {
      input: this.props.initialValue,
      prixInitial: this.props.initialValue,
      prix: this.props.initialValue
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.beforeClose = this.beforeClose.bind(this);
  }

  beforeVisible(event: string | Event) {
    document.getElementsByName("keyboard")[0].setAttribute("readOnly", "true");
  }

  beforeClose(event: string | Event) {
    document.getElementsByName("keyboard")[0].removeAttribute("readOnly");
    if (this.keyboard!.state.value === "") {
      this.keyboard!.setState({ value: this.state.prixInitial });
    }
  }

  onInputChange(
    nouveauPrix?: string | Event,
    keyboard?: Element,
    el?: Element
  ) {
    console.log("Nouveau Prix: ", nouveauPrix);
    console.log("prix initial: ", this.state.prixInitial);

    if (typeof nouveauPrix === "string") {
      if (nouveauPrix.includes("%")) {
        const pourcentReduction = nouveauPrix
          .replace(this.state.prix, "")
          .replace("%", "")
          .replace("-", "");
        const prixMaj =
          Number(this.state.prix) * (1 - Number(pourcentReduction) / 100);
        const prixArrondi = Number.parseFloat(prixMaj.toString()).toFixed(2);
        this.setState({ prix: prixArrondi, input: prixArrondi });
      } else if (this.state.input === this.state.prixInitial) {
        console.log("remise à 0");
        this.setState({
          prix: nouveauPrix.replace(this.state.prix, ""),
          input: nouveauPrix.replace(this.state.prix, "")
        });
      } else {
        this.setState({ prix: nouveauPrix, input: nouveauPrix });
      }
    }
    this.keyboard!.setState({ value: this.state.prix });
  }

  public render() {
    console.log("this.state.input ", this.state.input);

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
              "{normal} {a}"
            ],
            normal: ["7 8 9", "4 5 6", "1 2 3", "0 . -", "{meta1} {b} {a}"]
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
          beforeClose: this.beforeClose
        }}
        onChange={this.onInputChange}
        ref={k => (this.keyboard = k)}
      />
    );
  }
}
