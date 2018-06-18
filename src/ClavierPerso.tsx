import * as React from "react";
import Keyboard from "react-virtual-keyboard";

// tslint:disable-next-line:no-empty-interface
interface PropsInterface {
  valeurInitiale: string;
}

interface StateInterface {
  valeurCourante: string;
  mettreAZero: boolean;
}
export default class ClavierPerso extends React.Component<
  PropsInterface,
  StateInterface
> {
  keyboard: Keyboard | null;
  constructor(props: PropsInterface) {
    super(props);
    this.state = {
      valeurCourante: this.props.valeurInitiale,
      mettreAZero: false
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.beforeClose = this.beforeClose.bind(this);
    this.beforeVisible = this.beforeVisible.bind(this);
  }

  beforeVisible(event: string | Event) {
    document.getElementsByName("keyboard")[0].setAttribute("readOnly", "true");
    this.setState({ mettreAZero: true });
  }

  beforeClose(event: string | Event) {
    document.getElementsByName("keyboard")[0].removeAttribute("readOnly");
    if (this.keyboard!.state.value === "") {
      this.keyboard!.setState({ value: this.props.valeurInitiale });
      this.setState({ valeurCourante: this.props.valeurInitiale });
    }
  }

  onInputChange(
    nouveauPrix?: string | Event,
    keyboard?: Element,
    el?: Element
  ) {
    if (
      typeof nouveauPrix === "string" &&
      nouveauPrix !== this.state.valeurCourante
    ) {
      if (this.state.mettreAZero) {
        nouveauPrix = nouveauPrix.replace(this.state.valeurCourante, "");
        this.setState({ mettreAZero: false });
      }
      if (this.demandeReduction(nouveauPrix)) {
        this.appliquerReduction(nouveauPrix);
      } else {
        this.setState({ valeurCourante: nouveauPrix });
      }
    }
    this.keyboard!.setState({ value: this.state.valeurCourante });
  }

  public appliquerReduction(nouveauPrix: string) {
    const pourcentReduction = nouveauPrix
      .replace(this.state.valeurCourante, "")
      .replace("%", "")
      .replace("-", "");
    const prixMaj =
      Number(this.state.valeurCourante) * (1 - Number(pourcentReduction) / 100);
    const prixArrondi = Number.parseFloat(prixMaj.toString()).toFixed(2);
    this.setState({ valeurCourante: prixArrondi.replace(".00", "") });
  }

  public demandeReduction(nouveauPrix: string) {
    return nouveauPrix.includes("%");
  }

  public render() {
    return (
      <Keyboard
        value={this.state.valeurCourante}
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
