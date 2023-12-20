import {
  BrandFacebook,
  BrandGithub,
  BrandLinkedin,
  BrandYoutube,
} from 'tabler-icons-react';
import { TypeAnimation } from 'react-type-animation';
import './Profile.css';
import React from 'react';

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
            Hello, I'm <span className="highligted-text">Tim</span>
          </p>
        </div>
        <div className="profile-details-role">
          <h1>
            <TypeAnimation
              sequence={[
                'Passionate Frontend Engineer 🚀 ',
                1000,
                'Expert in React & React Native 🌟',
                1000,
                'MERN Stack Specialist 💻',
                1000,
                'UI/UX Enthusiast 🎨 ',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <span className="profile-details-description">
            Love to develop modern web applications
          </span>
        </div>
        <div className="profile-contact">
          <button className="btn primary-btn">Contact me</button>
          <button className="btn highlighted-btn">Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
