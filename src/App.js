import './App.css';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './components/Api'
import { useState } from 'react';
import Forecast from './components/Forecast';

function App() {
  const style={
    container: `max-w-[1080px] my-8 mx-auto`,
    search: `mx-2`
  }

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch((err)=> console.log(err));

  }

  console.log(forecast)

  return (
    <div className={style.container}>
      <div className={style.search}>
      <Search onSearchChange={handleOnSearchChange} />
      </div>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;