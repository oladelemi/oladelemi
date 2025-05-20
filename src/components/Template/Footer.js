import React from 'react';
import data from '../../data/quotes';

const Footer = () => {
  // Get the current date
  const today = new Date();
  const dayOfMonth = today.getDate(); // Returns day of the month (1-31)

  // Use the date to determine which quote to display
  const quoteIndex = (dayOfMonth - 1) % data.length; // Ensure it wraps around the array
  const { quoted, source, image } = data[quoteIndex];

  return (
    <section id="footer_area">
      {/* Display the selected quote */}
      <div className="quote_header">My quote of the day:</div>
      <div id="quote_smash" className="quote_wrapper">
        <div className="quote_text">
          <p className="the_quote">&ldquo;{quoted}&rdquo;</p>
          <p className="originator">- {source}</p>
        </div>
        <div>
          <img
            className="source_image"
            src={image}
            alt={source}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
