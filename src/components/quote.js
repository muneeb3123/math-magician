import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteDisplay() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: { 'X-Api-Key': 'oQN4EJSvYa9kV73ye22Cdw==8bvk6qqP8bTrVruy' },
        });

        if (response && response.data && response.data.length) {
          setQuote(response.data[0]);
        } else {
          throw new Error('No quote found');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  const renderQuote = () => {
    if (loading) {
      return <p className="quote-loading">Loading...</p>;
    }

    if (error) {
      return (
        <p className="quote-error">
          Error:
          {error.message}
        </p>
      );
    }
    if (quote) {
      return (
        <div>
          <p className="quote-text">
            {`"${quote.quote}"`}
          </p>
          <p className="quote-author">
            -
            {quote.author}
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="quote-container">
      {renderQuote()}
    </div>
  );
}

export default QuoteDisplay;
