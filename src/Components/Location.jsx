import React from 'react';
import Styles from '../Styles/Location.module.css';
import { Clock, Mail, Globe } from 'lucide-react';

function Location() {
  return (
    <div className={Styles.LocationContainer}>
      <div className={Styles.left}>
        <h2 className={Styles.title}>Location</h2>
        <p>
          Currently based in <span className={Styles.highlight}>Lagos, Nigeria</span> and available for remote work opportunities.
        </p>
        <ul className={Styles.features}>
          <li>
            <Clock size={18} className={Styles.icon} />
            GMT+1 (West Africa Time)
          </li>
          <li>
            <Mail size={18} className={Styles.icon} />
            Respond quickly to emails and messages
          </li>
          <li>
            <Globe size={18} className={Styles.icon} />
            Fluent in English
          </li>
        </ul>
        <blockquote className={Styles.note}>
          Feel free to reach out to discuss your project requirements or any collaboration opportunities.
        </blockquote>
      </div>

      <div className={Styles.right}>
        
        <img
          src="/Images/location.png"
          alt="Location"
          className={Styles.mapImage}
        />
      </div>
    </div>
  );
}

export default Location;
