    import { useState, useEffect } from 'react';
    import './MotivationalQuotes.css';
    import Header from '../Header/Header';
    import api from '../../utils/ThirdPartyApi';

    const MotivationalQuotes = ({handleShowLoading, handleHideLoading}) => {

        const [quotes, setQuotes] = useState([]);
        const [hasMore, setHasMore] = useState(true);

        useEffect(() => {
            const storedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
            if (storedQuotes.length > 0) {
                setQuotes(storedQuotes);
            } 
        }, []);

        useEffect(() => {
            localStorage.setItem('quotes', JSON.stringify(quotes));
        }, [quotes]);

        const fetchQuotes = async () => {
            handleShowLoading();

            try {
                const newQuotes = await api.getQuotes(3);
                setQuotes(prevQuotes => [...prevQuotes, ...newQuotes]);

                if (newQuotes.length < 3) {
                    setHasMore(false);
                }
            } catch (error) {
                console.error('Error fetching quotes:', error);
            } finally {
                handleHideLoading();
            }
        };

        const handleLoadMore = () => {
            fetchQuotes();
        };

        return (
            
            <main className="main">
                <Header>
                    <h2 className="header__title">Frases motivacionales</h2>
                </Header>
                <section className="quotes">
                    {quotes.map((quote) => (
                        <div className="quotes__card" key={quote._id}>
                            <div className="quotes__header">
                                <p className="quotes__author">{quote.author}</p>
                            </div>
                            <div className="quotes__body">
                                <p className="quotes__paragraph">{quote.content}</p>
                            </div>
                        </div>
                    ))}
                </section>
                <div className="quotes__load">
                    <button onClick={handleLoadMore} className="form__button">Cargar mas</button>
                </div>
            </main>
                
        );
    }

    export default MotivationalQuotes;