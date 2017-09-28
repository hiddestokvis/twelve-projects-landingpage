import * as React from 'react';
import * as $ from 'jquery';
import './introduction.css';

interface OwnProps {}
type IntroductionProps = OwnProps;

export default class Introduction extends React.Component<IntroductionProps, {}> {
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
    let width: number | undefined = $(window).width();
    if (width) {
      width = Math.min(width * .55, 800);
      this.setState({
        videoHeight: width * 0.5626,
      });
    }
  }

  render() {
    return (
      <div className="introduction">
        <div className="hallo">
          <h1>Hallo</h1>
          <p>Ben jij al een tijd opzoek naar dé perfecte webdeveloper
          om jouw droomproject tot leven te laten komen? Mooi.</p>
          <p>Wij zijn Hidde &amp; Boyan, samen zijn wij opzoek naar twaalf kickass projecten,
          die wij voor de juiste prijs willen realiseren.
          Dit is jouw kans om jouw droomproject van de grond te krijgen!</p>
          <p>
            <a href="https://www.linkedin.com/in/hiddestokvis/" target="_blank">- Bekijk Hidde's LinkedIn</a><br />
            <a href="https://www.linkedin.com/in/boyan-lamboo-503b22a8/" target="_blank">- Bekijk Boyan's LinkedIn</a>
          </p>
        </div>
        <div
          className="video"
          style={{
            height: this.state.videoHeight,
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hM1D-U3nqco?rel=0&amp;showinfo=0"
            frameBorder="0"
          />
        </div>
      </div>
    );
  }
}
