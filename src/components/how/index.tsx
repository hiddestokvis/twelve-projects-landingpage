import * as React from 'react';
import * as $ from 'jquery';
import './how.css';

interface OwnProps {}
type HowProps = OwnProps;

export default class How extends React.Component<HowProps, {}> {
  state: {
    videoHeight: number;
  } = {
    videoHeight: 0,
  };
  constructor() {
    super();
    this.getVideoHeight = this.getVideoHeight.bind(this);
  }

  componentDidMount() {
    $(window).resize(this.getVideoHeight);
    this.getVideoHeight();
  }

  getVideoHeight() {
    let width: number | undefined = $('.how .video').width();
    if (width) {
      width = Math.min(width, 800);
      this.setState({
        videoHeight: width * 0.5626,
      });
    }
  }

  render() {
    return (
      <div className="how">
        <div
          className="video"
          style={{
            height: this.state.videoHeight,
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GRqdaB0iQ90?rel=0&amp;showinfo=0"
            frameBorder="0"
          />
        </div>
        <h1>Dit is<br/>hoe<br/>het<br/>werkt</h1>
      </div>
    );
  }
}
