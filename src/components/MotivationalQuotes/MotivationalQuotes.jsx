import { useState, useEffect } from 'react';
import './MotivationalQuotes.css';
import Header from '../Header/Header';

const MotivationalQuotes = () => {

    const [quotes, setQuotes] = useState('');

    const getApiQuotes = async () => {

        try {

            const res = await fetch("http://api.quotable.io/quotes/random?limit=6");
            
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
    
            const data = await res.json();
            setQuotes(data);

        } catch (err) {
            console.error("🚀 ~ getApiQuotes ~ error:", err.message);
        }

    }

    useEffect(() => {

        getApiQuotes();

    },[])


    return (
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
                {/* 
                */}
            </section>
        </main>
    );
}

export default MotivationalQuotes;