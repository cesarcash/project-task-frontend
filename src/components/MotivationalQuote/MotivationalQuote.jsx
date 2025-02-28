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
            <div className="quote__actions">
                <button className="button button_action_like " aria-label="Me gusta">
                    {/* <FontAwesomeIcon icon={faThumbsUp} /> */}
                </button>
                <button className="quote__like button__like_action">
                </button>
            </div>
        </div>
    );

}

export default MotivationalQuote;