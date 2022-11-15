import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {

  const apiKey = 'b4fe8bb3615246fa8da34cdea4aa44c3';
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    .then((response) => {setNews(response.data.articles); console.log(response.data.articles)});
  }, []);

  return (
    <div className="App grid grid-cols-3 gap-5">
     {news.length === 0 ? "Loading" : 
     news.map((obj) => <Card obj={obj} key={obj.url}/>)}
    </div>
  );
}

export default App;
/**
 * <Card obj={news[1]}/>
 */