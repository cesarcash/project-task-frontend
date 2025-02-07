import { useState, useEffect } from 'react';
import './MotivationalQuotes.css';
import Header from '../Header/Header';
import api from '../../utils/ThirdPartyApi';
import Preloader from '../Preloader/Preloades';

const MotivationalQuotes = () => {

    const [quotes, setQuotes] = useState('');
    const [isPreloader, setPreloader] = useState(false);

    const fetchQuotes = async () => {

        const apiQuotes = await api.getQuotes(3);
        setQuotes(apiQuotes);

    }

    useEffect(() => {

        fetchQuotes();

    },[])


    return (
        <>
            {isPreloader ? <Preloader /> : 
                <main className="main">
                    <Header>
                        <h2 className="header__title">Frases motivacionales</h2>
                    </Header>
                    <section className="quotes">
                        {
                            quotes && quotes.map((quote) => {
                                return (
                                    
                                    <div className="quotes__card" key={quote._id}>
                                        <div className="quotes__header">
                                            <p className="quotes__author">{quote.author}</p>
                                        </div>
                                        <div className="quotes__body">
                                            <p className="quotes__paragraph">
                                                {quote.content}
                                            </p>
                                        </div>
                                    </div> 
                                )
                            })
                        }
                    </section>
                </main>
            }
        </>
    );
}

export default MotivationalQuotes;