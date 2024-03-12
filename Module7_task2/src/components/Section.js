import React from 'react';

const Section = ({ browsers }) => (
  <section>
    {browsers.map((browser) => (
      <article key={browser.name}>
        <h2>{browser.name}</h2>
        <img src={browser.logo} alt={`${browser.name} Logo`} style={{ width: "100px", height: "100px" }}/>
        <p>{browser.description}</p>
      </article>
    ))}
  </section>
);

export default Section;