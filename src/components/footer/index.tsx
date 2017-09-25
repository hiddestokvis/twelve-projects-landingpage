import * as React from 'react';
import './footer.css';

interface OwnProps {}
type FooterProps = OwnProps;

export default class Footer extends React.Component<FooterProps, {}> {
  render() {
    return (
      <div className="footer">
        <div className="footer-main">
          <h1>Met liefde mogelijk<br/>gemaakt door<br/>Trunkrs</h1>
          <a href="https://www.trunkrs.nl" target="_blank">- Bezoek website</a>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/trunkrs/" target="_blank" className="instagram">Instagram</a><br />
          <a href="https://www.facebook.com/Trunkrs/" target="_blank" className="facebook">Facebook</a><br />
          <a href="https://www.linkedin.com/company/10954655/" target="_blank" className="linkedin">LinkedIn</a>
        </div>
      </div>
    );
  }
}
