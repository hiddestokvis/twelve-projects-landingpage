import * as React from 'react';
import { connect } from 'react-redux';
import * as fetch from 'isomorphic-fetch';
import * as io from 'socket.io-client';
import { SlotState, Slot } from '../../redux/models/Slot';
import { AppState } from '../../redux/AppState';
import { API_URL } from '../../constants';
import { SlotActions } from '../../redux/actions/slot.actions';

interface StateProps {
  slots?: SlotState;
}
interface OwnProps {}
interface DispatchProps {
  dispatch: Function;
}

type SlotApiProps = StateProps & DispatchProps & OwnProps;

class SlotApi extends React.Component<SlotApiProps, {}> {
  constructor (props: SlotApiProps) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    const socket = io(API_URL);
    socket.on('update_pitch', () => {
      props.dispatch(SlotActions.invalidate());
    });
  }

  componentDidMount() {
    this.handleUpdate(this.props);
  }

  componentWillReceiveProps(nextProps: SlotApiProps) {
    this.handleUpdate(nextProps);
  }

  handleUpdate(props: SlotApiProps) {
    const { slots } = props;
    if (
      slots &&
      slots.didInvalidate &&
      !slots.isFetching &&
      !slots.failed
    ) {
      this.props.dispatch(SlotActions.fetch());
      fetch(`${API_URL}/api/v1/slots`)
      .then((response) => {
        if (response.status >= 400) {
          return Promise.reject(response.status);
        }
        return response.json();
      })
      .then((response) => {
        const _slots: { [key: number]: Slot } = {};
        response.results.map((item: Slot) => Object.assign(_slots, { [item.id]: item }));
        this.props.dispatch(SlotActions.succeed(_slots));
      })
      .catch((/*error*/) => {
        this.props.dispatch(SlotActions.fail());
      });
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state: StateProps): AppState => ({
  slots: state.slots,
});

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps)(SlotApi);
