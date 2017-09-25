import * as React from 'react';
import './header.css';

interface OwnProps {}
type HeaderProps = OwnProps;

export default class Header extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <div className="header">
        <div className="logo" />
      </div>
    );
  }
}
