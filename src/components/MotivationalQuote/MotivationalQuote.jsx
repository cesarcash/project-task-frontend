import './MotivationalQuote.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const MotivationalQuote = ({quote, handleLikeQuote}) => {

    return (
        <div className="quote">
            <p className="quote__author">{quote.author}</p>
            <blockquote className='quote__content'>
                <FontAwesomeIcon icon={faQuoteLeft} /> 
                {quote.content}
                <FontAwesomeIcon icon={faQuoteRight} />
            </blockquote>
            <div className="quote__actions">
                <button className="quote__like" aria-label="Me gusta" onClick={()=> handleLikeQuote({author: quote.author, content: quote.content, tags: quote.tags})}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>
            </div>
        </div>
    );

}

export default MotivationalQuote;