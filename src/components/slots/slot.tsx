import * as React from 'react';
import './slot.css';

interface OwnProps {
  price: number;
  no_pitches: number;
  id: number;
  extraClass?: string;
  setSlotId: (id: number) => void;
}
type SlotProps = OwnProps;

export default class Slot extends React.Component<SlotProps, {}> {
  priceRender(price: number) {
    if (price.toString().length > 3) {
      return `${price.toString().slice(0, -3)}.${price.toString().slice(-3)}`;
    }
    return price;
  }

  render() {
    return (
      <div className={`slot-item ${this.props.extraClass}`}>
        <h1>&euro;{this.priceRender(this.props.price)}</h1>
        <p><strong>{this.props.no_pitches}</strong> personen hebben hun project gepitcht</p>
        <a href="#pitch-form" onClick={() => this.props.setSlotId(this.props.id)}>Pitch nu</a>
      </div>
    );
  }
}
