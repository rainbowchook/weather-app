import {useEffect, useState} from 'react'

//utf-8 emojis
const weatherEmojis = {
  sunny: '🌞',
  stormy: '⛈️',
  rainy: '🌧️',
  cloudy: '☁️',
}

const WeatherEmoji = ({weatherConditions}) => {
  const [currConditions, setcurrConditions] = useState(weatherEmojis.sunny)

  //Equivalent componentWillMount() lifeCycle method for class components(?)
  useEffect(() => {
    const getConditions = () => {
      weatherConditions === 'sunny'
      // ? <p className=''>&#127774;</p>
      ? setcurrConditions(weatherEmojis.sunny)
      : (weatherConditions === 'stormy'
        ? setcurrConditions(weatherEmojis.stormy)
        : (weatherConditions === 'rainy'
          ? setcurrConditions(weatherEmojis.rainy)
          : (weatherConditions === 'cloudy'
            ? setcurrConditions(weatherEmojis.cloudy)
            : setcurrConditions(weatherEmojis.sunny)
            )))
    }
    getConditions()
  }, [weatherConditions])
  return (
    <h2 className='text-8xl p-6'>{currConditions}</h2>
  )
}
export default WeatherEmoji
