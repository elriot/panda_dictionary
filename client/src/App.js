import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { MainPage } from "./pages/MainPage";
import { AddPandaPage } from "./pages/AddPandaPage";
import { EditPandaPage } from "./pages/EditPandaPage";
import { MenuBar } from "./pages/MenuBar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <MenuBar />
        <div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/add" element={<AddPandaPage />} />
            <Route path="/editPanda/:id" element={<EditPandaPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // 서버에 GET 요청을 보냅니다.
//     axios.get('http://localhost:3001/data')
//       .then(response => {
//         console.log(response);
//         setData(response.data.message);
//       })
//       .catch(error => {
//         console.error("There was an error fetching data!", error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       {data ? <p>{data}</p> : <p>Loading...</p>}
//     </div>
//   );
// }

// export default App;
