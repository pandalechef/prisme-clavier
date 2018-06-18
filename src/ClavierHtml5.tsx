import * as React from "react";

export interface ClavierHtml5Props {
  valeurInitiale: string;
}

export interface ClavierHtml5State {
  valeurCourante: string;
}
export default class ClavierHtml5 extends React.Component<
  ClavierHtml5Props,
  ClavierHtml5State
> {
  constructor(props: ClavierHtml5Props) {
    super(props);
    this.state = { valeurCourante: this.props.valeurInitiale };
  }
  onFocus(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.setSelectionRange(0, e.currentTarget.value.length);
  }
  render() {
    return (
      <input
        type="number"
        defaultValue={this.state.valeurCourante}
        onFocus={this.onFocus}
        step="0.01"
        min="0"
      />
    );
  }
}
