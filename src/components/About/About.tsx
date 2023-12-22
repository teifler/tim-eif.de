import './About.css';

import React from 'react';

import Selfie from '../../assets/images/me.jpg';
import SectionHeading from '../SectionHeading/SectionHeading';

const bulletPoints = [
  'React and Redux Savvy',
  'Experienced with the MERN Stack',
  'Web Components with LIT',
  'Managing Databases and Servers',
  'Problem-Solving and Creativity',
];

const About = () => {
  return (
    <div className="about-container">
      <SectionHeading heading="About Me" subheading="Why Choose me" />
      <div className="about-wrapper">
        <div className="about-image">
          <img src={Selfie} alt="pictureme" />
        </div>
        <div className="about-details">
          <div className="about-introduction">
            <p>
              I&apos;m a Frontend Developer who loves turning complex problems into
              smooth, user-friendly web experiences. Armed with expertise in the MERN
              stack and a passion for coding, I&apos;m all about creating solutions that
              not only work great but also make life easier for everyone involved.
            </p>
          </div>
          <div className="about-bullet-points">
            <h4>Here are my main Skills:</h4>
            <ul>
              {bulletPoints.map((bulletPoint) => (
                <li key={bulletPoint}>{bulletPoint}</li>
              ))}
            </ul>
          </div>
          <div>
            <button className="btn btn-primary">Hire Me</button>
            <button className="btn btn-highlighted">Get Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
