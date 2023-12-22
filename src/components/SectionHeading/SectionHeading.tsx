import './SectionHeading.css';

import React from 'react';

type SectionHeadingProps = {
  heading: string;
  subheading?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading, subheading }) => {
  return (
    <div className="heading-container">
      <div className="component-heading">
        <span>{heading}</span>
      </div>
      {subheading && (
        <div className="component-subheading">
          <span>{subheading}</span>
        </div>
      )}
      <div className="component-separator">
        <div className="separator-line">
          <div className="separator-line-knob">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
