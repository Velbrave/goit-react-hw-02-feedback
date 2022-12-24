import React from 'react';

const Section = ({ title, children }) => {
  return (
    <section>
      <h1 className="title">{title} </h1>
      {children}
    </section>
  );
};

export default Section;
