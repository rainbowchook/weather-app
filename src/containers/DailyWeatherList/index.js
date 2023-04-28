import React from 'react'
import DailyWeather from '../../components/DailyWeather'


const DailyWeatherList = ({forecastData}) => {
  return (
    <div className='container mx-auto px-6'>
      {forecastData && forecastData.length && forecastData.map((forecastData, index) => (
        <DailyWeather key={index} forecastData={forecastData} />
      ))}
    </div>
  )
}

export default DailyWeatherList
