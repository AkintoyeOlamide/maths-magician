/* eslint-disable max-len */
import React from 'react';
import homeStyles from '../styles/home.module.css';

const Home = () => (
  <div>
    <h2 className={homeStyles.heading}>What is math?</h2>
    <div>
      <p className={homeStyles.paragraph}>
        mathematics, the science of structure, order, and relation that has
        evolved from elemental practices of counting, measuring, and describing
        the shapes of objects. It deals with logical reasoning and quantitative
        calculation, and its development has involved an increasing degree of
        idealization and abstraction of its subject matter.
        {' '}
      </p>

      <p className={homeStyles.paragraph}>
        {' '}
        Since the 17th century, mathematics has been an indispensable adjunct to
        the physical sciences and technology, and in more recent times it has
        assumed a similar role in the quantitative aspects of the life sciences.
      </p>

      <p className={homeStyles.paragraph}>
        In many cultures—under the stimulus of the needs of practical pursuits,
        such as commerce and agriculture—mathematics has developed far beyond
        basic counting. This growth has been greatest in societies complex
        enough to sustain these activities and to provide leisure for
        contemplation and the opportunity to build on the achievements of
        earlier mathematicians.
      </p>
    </div>
  </div>
);

export default Home;
