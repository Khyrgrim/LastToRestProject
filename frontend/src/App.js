import './App.css';
import React, { useEffect, useState } from "react";

import Axios from "axios";

import Auth from './Auth';

function App() {

  const [userToken, setUserToken] = useState("");

  const [data, setData] = useState([]);
  const [dataAreLoad,setDataAreLoad] = useState(false);

  useEffect(() => {

  }, [])

  const getData = () => {
    Axios.get("http://localhost:3000/api/stuff", { headers: { "authorization": `Bearer ${userToken}` } })
      .then(response => {
        console.log("Axios get data:");
        console.log(response.data);
        setData(response.data);
        setDataAreLoad(!dataAreLoad)
      })
  }

  return (
    <div className="App">
      <Auth setUserTokenInParent={setUserToken} />
      <button onClick={getData}>GET DATA</button>
      <br />
      {dataAreLoad && `data : ${data[0].title}`}
    </div>
  );
}

export default App;
