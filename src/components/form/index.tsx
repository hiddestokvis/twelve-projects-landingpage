import * as React from 'react';
import { connect } from 'react-redux';
import { get, set } from 'nested-property';
import { Button, Alert } from 'reactstrap';
import * as fetch from 'isomorphic-fetch';
import ScrollableAnchor from 'react-scrollable-anchor';
import { API_URL } from '../../constants';
import { AppState } from '../../redux/AppState';
import { PitchState } from '../../redux/models/Pitch';
import { SlotState } from '../../redux/models/Slot';
import { FormInput } from './input';
import { FormCheckbox } from './checkbox';
import { FormTextarea } from './textarea';
import { FormSelect } from './select';
import { PitchActions } from '../../redux/actions/pitch.actions';
import { isTrue, isNotEmpty, isValidPostalCode, isValidPhoneNumber } from '../../utils/validate';
import './form.css';

interface StateProps {
  slots?: SlotState;
  pitch?: PitchState;
}
interface OwnProps {}
interface DispatchProps {
  dispatch: Function;
}

type FormProps = StateProps & DispatchProps & OwnProps;

class Form extends React.Component<FormProps, {}> {
  state: {
    _valid: boolean;
  } = {
    _valid: false,
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.sendPitch = this.sendPitch.bind(this);
  }

  /*
  * sendPitch
  * Post a pitch to the back-end
  *
  * @params {SyntheticEvent<HTMLInputElement>} event: the click event (not used)
  */
  sendPitch(event: React.SyntheticEvent<HTMLInputElement>) {
    // Start submitting pitch
    this.props.dispatch(PitchActions.submit());
    fetch(`${API_URL}/api/v1/pitches`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: (this.props.pitch) && JSON.stringify(this.props.pitch.item),
    })
    .then((response) => {
      // Reject on error
      if (response.status >= 400) {
        return Promise.reject('STATUS CODE ERROR');
      }
      return response.json();
    })
    .then((response) => {
      // Pitch submitted succesfully
      this.props.dispatch(PitchActions.succeed());
    })
    .catch((/*error*/) => {
      // Error in submitting pitch
      this.props.dispatch(PitchActions.fail());
    });
  }

  /*
  * handleChange()
  * Handles a keyboard event in an input and updates the redux store to reflect changes
  *
  * event {SyntheticEvent<HTMLInputElement>} change event
  */
  handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    const value: string | number = event.currentTarget.value;
    const keys: string = event.currentTarget.name.replace('+', '');
    // Check if plus symbol is in name of field indicating a number field
    const isNumber: boolean = event.currentTarget.name.search('\\+') > -1;
    const state: PitchState | undefined = this.props.pitch;
    if (state) {
      if (isNumber) {
        set(state, keys, Number(value));
      } else {
        set(state, keys, value);
      }
      this.props.dispatch(PitchActions.update(state.item));
      // Validate input
      this.validate();
    }
  }

  /*
  * validate()
  * Validate form input and set local state
  *
  */
  validate() {
    let valid: boolean = false;
    if (this.props.pitch) {
      if (
        isNotEmpty(this.props.pitch.item.person.first_name) &&
        isNotEmpty(this.props.pitch.item.person.last_name) &&
        isNotEmpty(this.props.pitch.item.person.email) &&
        isNotEmpty(this.props.pitch.item.person.phone_number) &&
        isNotEmpty(this.props.pitch.item.person.address) &&
        isNotEmpty(this.props.pitch.item.person.postal_code) &&
        isNotEmpty(this.props.pitch.item.person.city) &&
        (
          isNotEmpty(this.props.pitch.item.pitch.description) ||
          isNotEmpty(this.props.pitch.item.pitch.link)
        ) &&
        isNotEmpty(this.props.pitch.item.pitch.slot_id) &&
        isValidPostalCode(this.props.pitch.item.person.postal_code) &&
        isValidPhoneNumber(this.props.pitch.item.person.phone_number) &&
        isTrue(this.props.pitch.item.acceptTerms)
      ) {
        valid = true;
      }
    }
    this.setState({
      _valid: valid,
    });
  }

  render() {
    return (
      <div className="form">
        <div className="form-container">
          <h1>Pitch it!</h1>
          <ScrollableAnchor id="pitch-form">
            <div className="form-group">
              { (this.state._valid && this.props.pitch && this.props.pitch.failed) && (
                <Alert color="danger">Er ging iets mis bij het versturen. Je kan maar 1 x pitchen op het gratis slot en 1 x op een ander slot.</Alert>
              ) }
              <FormInput
                placeholder="Voornaam"
                name="item.person.first_name"
                handleChange={this.handleChange}
                value={get(this.props.pitch, 'item.person.first_name')}
              />
              <br />
              <FormInput
                placeholder="Achternaam"
                name="item.person.last_name"
                handleChange={this.handleChange}
                value={get(this.props.pitch, 'item.person.last_name')}
              />
              <br />
              <FormInput
                placeholder="E-mail"
                name="item.person.email"
                handleChange={this.handleChange}
                value={get(this.props.pitch, 'item.person.email')}
              />
              <br />
              <FormInput
                placeholder="Telefoonnummer"
                name="item.person.phone_number"
                handleChange={this.handleChange}
                value={get(this.props.pitch, 'item.person.phone_number')}
              />
              <br />
              <FormInput
                placeholder="Adres"
                name="item.person.address"
                handleChange={this.handleChange}
                value={get(this.props.pitch, 'item.person.address')}
              />
              <br />
              <FormInput
                placeholder="Postcode"
                name="item.person.postal_code"
                handleChange={this.handleChange}
                value={get(this.props.pitch, 'item.person.postal_code')}
              />
              <br />
              <FormInput
                placeholder="Stad"
                name="item.person.city"
                handleChange={this.handleChange}
                value={get(this.props.pitch, 'item.person.city')}
              />
              <FormSelect
                placeholder="Slot"
                name="item.pitch.slot_id+"
                handleChange={this.handleChange}
                value={get(this.props.pitch, 'item.pitch.slot_id') || 0}
                options={this.props.slots && Object.keys(this.props.slots.items).map(item => ({
                  key: item,
                  value: (this.props.slots) ?
                    `Slot #${this.props.slots.items[item].position} - €${this.props.slots.items[item].price}` : '',
                }))}
              />
              <FormTextarea
                placeholder="Je pitch"
                name="item.pitch.description"
                handleChange={this.handleChange}
                value={get(this.props.pitch, 'item.pitch.description')}
              />
              <br />
              <FormInput
                placeholder="Een link naar een filmpje of extra informatie"
                name="item.pitch.link"
                handleChange={this.handleChange}
                value={get(this.props.pitch, 'item.pitch.link')}
              />
              <br />
              <FormCheckbox
                placeholder="Ik heb de voorwaarden gelezen en wil mijn pitch insturen met kans dat deze gekozen wordt"
                name="item.acceptTerms"
                handleChange={this.handleChange}
                value={get(this.props.pitch, 'item.acceptTerms') as boolean}
              />
              <Button
                color="success"
                onClick={this.sendPitch}
                disabled={!this.state._valid}
              >
                Pitch versturen
              </Button>
            </div>
          </ScrollableAnchor>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StateProps): AppState => ({
  pitch: state.pitch,
  slots: state.slots,
});

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps)(Form);
