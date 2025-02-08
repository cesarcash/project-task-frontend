    import { useState, useEffect } from 'react';
    import './MotivationalQuotes.css';
    import Header from '../Header/Header';
    import api from '../../utils/ThirdPartyApi';
    import Preloader from '../Preloader/Preloades';

    const MotivationalQuotes = () => {

        const [quotes, setQuotes] = useState([]);
        const [loading, setLoading] = useState(false);
        const [limit, setLimit] = useState(3);
        const [hasMore, setHasMore] = useState(true);

        const fetchQuotes = async () => {

            setLoading(true);

            try {

                const newQuotes = await api.getQuotes(limit);
                setQuotes(prevQuotes => [...prevQuotes, ...newQuotes]);
                
                // setLimit(newQuotes.length + 3);
                // localStorage.setItem('numQuotes',newQuotes.length + 3);
                // console.log("🚀 ~ fetchQuotes ~ newQuotes.length:", newQuotes.length + 3)

                if (newQuotes.length < limit) {
                    setHasMore(false);
                }

            } catch (error) {
                console.error('Error fetching quotes:', error);
            } finally {
                setLoading(false);
            }

        };

        useEffect(() => {
            fetchQuotes();
        },[]);

        const handleLoadMore = () => {
            fetchQuotes();
        };

        return (
            <>
                {loading ? <Preloader /> : 
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
                        {hasMore && !loading && (
                            <div className="quotes__load">
                                <button onClick={handleLoadMore} className="form__button">Cargar mas</button>
                            </div>
                        )}
                    </main>
                }
            </>
        );
    }

    export default MotivationalQuotes;