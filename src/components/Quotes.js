/* eslint-disable max-len */
import React from 'react';
import quotesStyles from '../styles/quotes.module.css';

function Quotes() {
  return (
    <div className={quotesStyles['quote-container']}>
      <p className={quotesStyles.quote}>
        “Without mathematics, there’s nothing you can do. Everything around
        you is mathematics. Everything around you is numbers.”
        <small> – Shakuntala Devi</small>
      </p>
    </div>
  );
}

export default Quotes;
