import DailyWeatherList from '../DailyWeatherList'
import {forecastData} from '../../data.js'

function App() {
  return (
    <div className='md:container mx-auto px-4 bg-gradient-to-b from-sky-200 to-sky-400'>
      <header className="text-3xl font-bold underline">Weather App</header>
      <DailyWeatherList forecastData={forecastData}/>
    </div>
  );
}

export default App;
