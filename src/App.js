import React, { useState, useEffect } from "react";
import Product from "./components/Product";
import loader from "./loader2.gif";

// import Local from './components/Local'

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState([]);
  const [message, setMessage] = useState();
  const [global, setGlobal] = useState([]);
  const [totalConfirmed, setTotalConfirmed] = useState("");
  const [totalDeaths, setTotalDeaths] = useState("");
  const [totalRecovered, setTotalRecovered] = useState("");

  useEffect(() => {
    setMessage(true);
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.Countries);
        setDate(data.Countries);
        setGlobal(data.Global);

        console.log(data.Countries);
        console.log(
          JSON.stringify(data.Global).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        );
        setTotalConfirmed(
          JSON.stringify(data.Global.TotalConfirmed).replace(
            /(\d)(?=(\d{3})+(?!\d))/g,
            "$1,"
          )
        );
        setTotalDeaths(
          JSON.stringify(data.Global.TotalDeaths).replace(
            /(\d)(?=(\d{3})+(?!\d))/g,
            "$1,"
          )
        );
        setTotalRecovered(
          JSON.stringify(data.Global.TotalRecovered).replace(
            /(\d)(?=(\d{3})+(?!\d))/g,
            "$1,"
          )
        );

        setLoading(true);
        setMessage(false);
      });
  }, []);

  // const handleDataFetch = () => {
  //   setMessage(true);
  //   fetch("https://api.covid19api.com/summary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data.Countries);
  //       setDate(data.Countries);
  //       setGlobal(data.Global);

  //       console.log(data.Countries);
  //       console.log(
  //         JSON.stringify(data.Global).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  //       );
  //       setTotalConfirmed(
  //         JSON.stringify(data.Global.TotalConfirmed).replace(
  //           /(\d)(?=(\d{3})+(?!\d))/g,
  //           "$1,"
  //         )
  //       );
  //       setTotalDeaths(
  //         JSON.stringify(data.Global.TotalDeaths).replace(
  //           /(\d)(?=(\d{3})+(?!\d))/g,
  //           "$1,"
  //         )
  //       );
  //       setTotalRecovered(
  //         JSON.stringify(data.Global.TotalRecovered).replace(
  //           /(\d)(?=(\d{3})+(?!\d))/g,
  //           "$1,"
  //         )
  //       );

  //       setLoading(true);
  //       setMessage(false);
  //     });
  // };

  // const handleDataFetch2 = () => {
  //   fetch('https://api.covid19api.com/dayone/country/spain/status/confirmed/live')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts(data);
  //       console.log(data);
  //     });
  // };

  const list = posts.map((product) => (
    <Product product={product} key={product.Country} />
  ));
  const datePull = date.map((day) => <p>{day.Date}</p>);

  // const local = posts.map((product) => <Local product={product} />);

  return (
    <div className="container-fluid">
      {/* <button onClick={handleDataFetch}>Fetch All</button> */}
      {message ? (
        <div className="loader">
          <p>Loading</p>
          <img src={loader} />
        </div>
      ) : (
        <p></p>
      )}
      {!message ? (
        <div className="jumbotron">
          <h1>Global</h1>
          <br />
          <h4>Total Confirmed {totalConfirmed}</h4>
          <h4>Total Deaths {totalDeaths}</h4>
          <h4>Total Recovered {totalRecovered}</h4>
          <br />
          <p>Last Fetch{datePull[0]}</p>
        </div>
      ) : null}

      {loading ? <div className="row">{list}</div> : null}
    </div>
  );
}
export default App;
