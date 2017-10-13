import * as React from 'react';
import './portfolio.css';

interface OwnProps {}

export default class Portfolio extends React.Component<OwnProps, {}> {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio-background" />
        <div className="portfolio-list">
          <div className="portfolio-item">
            <img className="portfolio-image" src={require('./images/driver-app.jpg')} />
            <div className="portfolio-text">
              <h1>Projecten</h1>
              <p>De Trunkrs driver-applicatie is een App voor zowel iOS als Android, waarmee het voor chauffeurs&nbsp;
              super makkelijk wordt om pakketten af te leveren. De applicatie: helpt de chauffeur met de route,&nbsp;
              zorgt ervoor dat ze eenvoudig alle statussen bij&nbsp;
              kunnen houden en geeft Trunkrs een inzicht in de locatie en performance van de chauffeur.</p>
              <p>De driver-applicatie is een hybride applicatie ontwikkeld in Ionic2 (Angular 2+).&nbsp;
              Ook interesse in een (hybride) app?&nbsp;
              <a href="#pitch-form">Pitch je project!</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
