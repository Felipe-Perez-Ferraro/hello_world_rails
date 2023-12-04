import "@hotwired/turbo-rails"
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/v1/messages')
        const result = await response.json()
        setData(result)
        console.log(result)
      } catch (error) {
        throw new Error(error)
      }
    }

    fetchApi()
  }, [])
  return (
    <>
      <h1>{data.message}</h1>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);