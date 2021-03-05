import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ hits: []});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=react',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.ObjectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;
