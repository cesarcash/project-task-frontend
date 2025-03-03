import { useEffect, useState } from 'react';
import './MotivationalQuote.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const MotivationalQuote = ({quote}) => {    

    return (
        <div className="quote">
            <p className="quote__author">{quote.author}</p>
            <blockquote className='quote__content'>
                <FontAwesomeIcon icon={faQuoteLeft} /> 
                {quote.content}
                <FontAwesomeIcon icon={faQuoteRight} />
            </blockquote>
        </div>
    );

}

export default MotivationalQuote;