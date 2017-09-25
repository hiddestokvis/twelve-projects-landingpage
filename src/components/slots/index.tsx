import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux/AppState';
import { SlotState } from '../../redux/models/Slot';
import { Pitch, PitchState } from '../../redux/models/Pitch';
import { PitchActions } from '../../redux/actions/pitch.actions';
import { default as Header } from './header';
import { default as Slot } from './slot';
import './slots.css';

interface OwnProps {}
interface StateProps {
  slots?: SlotState;
  pitch?: PitchState;
}
interface DispatchProps {
  dispatch: Function;
}

type SlotsProps = OwnProps & StateProps & DispatchProps;

class Slots extends React.Component<SlotsProps, {}> {
  constructor() {
    super();
    this.setSlotId = this.setSlotId.bind(this);
  }

  getClass(index: number) {
    switch (index) {
      case 0:
        return 'first';
      case 9:
      case 10:
        return 'specials';
      case 11:
        return 'highest';
      default:
        return '';
    }
  }

  setSlotId(id: number) {
    if (this.props.pitch) {
      const pitch: Pitch = Object.assign({}, this.props.pitch.item, {
        pitch: {
          ...this.props.pitch.item.pitch,
          slot_id: id,
        },
      });
      this.props.dispatch(PitchActions.update(pitch));
    }
  }

  render() {
    return (
      <div className="slots">
        <Header />
        <div className="slots-container">
          <div className="slots-background" />
          <div className="slots-list">
            {this.props.slots && Object.keys(this.props.slots.items).map((id, index) => (
              <Slot
                key={Number(id)}
                price={this.props.slots && this.props.slots.items[id].price}
                no_pitches={this.props.slots && this.props.slots.items[id].no_pitches}
                id={Number(id)}
                extraClass={this.getClass(index)}
                setSlotId={this.setSlotId}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StateProps): AppState => ({
  slots: state.slots,
  pitch: state.pitch,
});

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps)(Slots);
