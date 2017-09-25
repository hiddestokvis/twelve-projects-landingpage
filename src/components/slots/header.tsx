import * as React from 'react';
import * as moment from 'moment';
import 'moment/locale/nl';
import * as fetch from 'isomorphic-fetch';
import { API_URL } from '../../constants';
import './header.css';

interface OwnProps {}
type HeaderProps = OwnProps;

export default class Header extends React.Component<HeaderProps, {}> {
  state: {
    countdown?: moment.Moment
  } = {
    countdown: undefined,
  };

  fetchTime() {
    fetch(`${API_URL}/api/v1/times`)
    .then((response) => {
      if (response.status >= 400) {
        return Promise.reject(response.status);
      }
      return response.json();
    })
    .then((time) => {
      this.setState({
        countdown: moment(time.closing).locale('nl'),
      });
    })
    .catch((/*error*/) => {
      this.setState({
        countdown: undefined,
      });
    });
  }

  componentDidMount() {
    this.fetchTime();
  }

  render() {
    return (
      <div className="slot-header">
        <h1>Kies jouw project slot</h1>
        <p>Je kan 1 x op het gratis slot pitchen en 1 x op een ander slot</p>
        { this.state.countdown && (
          <time>{this.state.countdown.fromNow()}</time>
        )}
      </div>
    );
  }
}
