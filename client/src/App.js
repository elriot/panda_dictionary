import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 서버에 GET 요청을 보냅니다.
    axios.get('http://localhost:3001/data')
      .then(response => {
        console.log(response);
        setData(response.data.message);
      })
      .catch(error => {
        console.error("There was an error fetching data!", error);
      });
  }, []);

  return (
    <div className="App">
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
