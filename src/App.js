import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const apiKey = "b4fe8bb3615246fa8da34cdea4aa44c3";
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("category=general");
  const [country, setCountry] = useState("country=us");

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?${category}&${country}&apiKey=${apiKey}`
      )
      .then((response) => {
        setNews(response.data.articles);
        console.log(response);
      });
  }, [category, country]);

  return (
    <div className="App bg-blue-200">
      <Navbar category={setCategory} country={{currentCountry: country.slice(country.indexOf("=")+1), switchCountry: setCountry}}/>
      <div className="grid grid-cols-4 gap-5">
        {news.length === 0
          ? "Loading"
          : news.map((obj) => <Card obj={obj} key={obj.url} />)}
      </div>
    </div>
  );
}

export default App;
/**
 * <Card obj={news[1]}/>
 */
