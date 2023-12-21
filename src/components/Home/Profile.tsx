import './Profile.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TypeAnimation } from 'react-type-animation';
import {
  BrandFacebook,
  BrandGithub,
  BrandLinkedin,
  BrandYoutube,
} from 'tabler-icons-react';

// Define a type for the link structure
type Link = {
  url: string;
  IconComponent: React.ElementType;
  text: string;
};

const links: Link[] = [
  { url: '#', IconComponent: BrandFacebook, text: '' },
  { url: '#', IconComponent: BrandLinkedin, text: '' },
  { url: '#', IconComponent: BrandYoutube, text: '' },
  { url: '#', IconComponent: BrandGithub, text: '' },
];

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <div className="profile-info">
          <ul className="profile-links">
            {links.map((link, index) => (
              <li key={`link-${index}`}>
                <a href={link.url} rel="noopener noreferrer" target="_blank">
                  <link.IconComponent /> {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="profile-details-name">
          <p className="primary-text">
            Hello, I&apos;m <span className="highligted-text">Tim</span>
          </p>
        </div>
        <div className="profile-details-role">
          <h1>
            <TypeAnimation
              sequence={[
                'Passionate Frontend Engineer <span>🚀</span> ',
                2500,
                'Expert in React & React Native <span>🌟</span>',
                2500,
                'MERN Stack Specialist <span>💻</span>',
                2500,
                'UI/UX Enthusiast <span>🎨</span> ',
                2500,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <span className="profile-details-description">
            Love to develop modern test web applications
          </span>
        </div>
        <div className="profile-action">
          <button className="btn btn-primary btn-sm">Get in Touch</button>
          <button className="btn btn-highlighted">Hire Me</button>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  );
};

export default Profile;
