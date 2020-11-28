import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data/quotes';

const Footer = ({ data }) => (
    <section id="footer_area">


        {/*TO DO
        
        Use Current Date to update Quote or find a quote website to get quotes and data from
        
        */}
        <div className="quote_header"> My favorite Quote of the day:</div>

        <div id="quote_smash" className="quote_wrapper">
            <div className="quote_text">
                <p className="the_quote">&ldquo;I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel&rdquo;</p>
                <p className="originator">- Maya Angelou</p>
            </div>
            <div> <img className="source_image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Angelou_at_Clinton_inauguration_%28cropped_2%29.jpg/220px-Angelou_at_Clinton_inauguration_%28cropped_2%29.jpg" alt="Maya Angelou" />
            </div>
        </div>
    </section>
);

export default Footer;
