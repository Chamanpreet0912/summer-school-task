import React, { useEffect, useState } from 'react';

function Advice() {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);

  const getAdvice = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      setAdvice(data.slip.advice);
    } catch (err) {
      setAdvice('Failed to fetch advice.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h2>Advice Page</h2>
      {loading ? <p>Loading...</p> : <p>{advice}</p>}
      <button onClick={getAdvice}>New Advice</button>
    </div>
  );
}

export default Advice;