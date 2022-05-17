import Menu from './components/Menu/Menu'
import Herosection from './components/Herosection/Herosection'
import Cards from './components/Cards/Cards'
import './App.css';
import {useEffect, useState} from "react";


function App() {
  
  let [weathers, setWeathers] = useState(null);

  const cities = ["Cekcyn", "Moscow", "Bratysława", "Mrocza"]
  useEffect(() => {
    const fetchWeathers = () => {
      Promise.all([fetch(`https://goweather.herokuapp.com/weather/${cities[0]}`), fetch(`https://goweather.herokuapp.com/weather/${cities[1]}`), fetch(`https://goweather.herokuapp.com/weather/${cities[2]}`), fetch(`https://goweather.herokuapp.com/weather/${cities[3]}`)])
        .then(res => Promise.all(res.map(r => r.json())))
          .then( ([city1, city2, city3, city4]) => {
          setWeathers([{...city1, city: `${cities[0]}`}, {...city2, city: `${cities[1]}`}, {...city3, city: `${cities[2]}`}, {...city4, city: `${cities[3]}`}, {...city1, city: `${cities[0]}`}, {...city2, city: `${cities[1]}`}, {...city3, city: `${cities[2]}`}])
        })
    }
    fetchWeathers()
    }, []);
    console.log(weathers)

  if(!weathers){
    return (
      <h3>Loading...</h3>
    );
  }
    return (
      <div className="container">
        <Menu />
        <Herosection  weathers={weathers}/>
        <Cards weathers={weathers}/> 
      </div>
    )
  
}

export default App;
