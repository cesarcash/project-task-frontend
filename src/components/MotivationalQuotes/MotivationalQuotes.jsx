import { useState, useEffect, useContext } from 'react';
import './MotivationalQuotes.css';
import Header from '../Header/Header';
import api from '../../utils/ThirdPartyApi';
import LoadingContext from '../../context/LoadingContext';
import { ToastContainer, toast } from 'react-toastify';


const MotivationalQuotes = () => {

    const [quotes, setQuotes] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const loading = useContext(LoadingContext);

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
        loading.showLoading();

        try {
            // const newQuotes = await api.getQuotes(3);
            const newQuotes = await api.getQuote();
            setQuotes(prevQuotes => [...prevQuotes, ...newQuotes]);

            if (newQuotes.length < 3) {
                setHasMore(false);
            }
        } catch (error) {
            toast.error(`${error.message}`, {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            throw error;
            // console.error('Error fetching quotes:', error);
        } finally {
            loading.hideLoading();
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
                            <p className="quotes__paragraph">{quote.quote}</p>
                        </div>
                        <div className="quotes__footer">
                            <p className="quotes__category">{quote.category}</p>
                        </div>
                    </div>
                ))}
            </section>
            <ToastContainer 
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="quotes__load">
                <button onClick={handleLoadMore} className="form__button">Cargar mas</button>
            </div>
        </main>
            
    );
}

export default MotivationalQuotes;