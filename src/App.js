import React,{useState} from 'react';
import axios from 'axios';
import './weather.css';

function App() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=fcb6a6f65e7eebbd595f14ba8c888af5`;


  const searchLocation = (event) =>{

  if(event.key === 'Enter')
  {

    axios.get(url)
  .then((response) => {

    setData(response.data);
    console.log(response.data);
  })
  .catch((error) => {

    console.error(error);
  });
    setLocation('')

  }

  }
   
  return (
    <div className="App">

      {/* Top of Application */}

      <div className='search'>
        <input className='search_input'
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"/>
      </div>
      <div className='container'>

        <div className='top'>

          <div className='location'>
            <p className='bold'>{data.name}</p>
          </div>

          <div className='temp'>
          {data.main && data.main.temp ? <h1 className='bold'>{data.main.temp}&deg;C</h1> : null}

          </div>

          <div className='description'>

            {data.weather ? <p className='bold'>{data.weather[0].main}</p> :null}

          </div>
          




     {/* bottom of Application */}
        </div>

        <div className='bottom'>

          <div className='feels'>
          {data.main ? <p className='bold'>{data.main.feels_like}&deg;C</p> :null} 
            
            <p>Feels Like</p>
          </div>

          <div className='humidity'>
          {data.main ? <p className='bold'>{data.main.humidity}%</p> :null} 
            
            <p>Humidity</p>
          </div>

          <div className='wind'>
          {data.wind ? <p className='bold'>{data.wind.speed}km/h</p> :null}
            
            <p>Wind Speed</p>
          </div>

          
        </div>

      </div>

      
      
    </div>
  );
}

export default App;
