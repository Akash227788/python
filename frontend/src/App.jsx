import React, { useState } from 'react';

export default function App() {
  const [params, setParams] = useState({ a: '', b: '', c: '', d: '' });
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setResult('');
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      });
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      const data = await response.json();
      setResult(JSON.stringify(data));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>API Request</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: 300, gap: 8 }}>
        <label>
          Param A:
          <input name="a" value={params.a} onChange={handleChange} />
        </label>
        <label>
          Param B:
          <input name="b" value={params.b} onChange={handleChange} />
        </label>
        <label>
          Param C:
          <input name="c" value={params.c} onChange={handleChange} />
        </label>
        <label>
          Param D:
          <input name="d" value={params.d} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {result && <pre style={{ marginTop: 20 }}>{result}</pre>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
