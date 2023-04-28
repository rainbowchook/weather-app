import {useState} from 'react'
import WeatherEmoji from '../WeatherEmoji'
import HourlyTemp from '../HourlyTemp'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'

const DailyWeather = ({forecastData}) => {
  const {day, conditions, maxTemp, wind, hourlyTemps} = forecastData
  const [show, setShow] = useState(false)

  const showModal = () => setShow(true)
  const hideModal = () => setShow(false)
  // const hourlyTemps = [
  //   17, 17, 17, 17, 18, 19,
  //   20, 22, 24, 27, 29, 32,
  //   34, 35, 34, 33, 32, 30,
  //   28, 26, 24, 21, 19, 18]
  return (
    <div className='bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl'>
      <div className='bg-white hover:shadow-xl focus:shadow-xl font-bold text-3xl space-y-2 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 text-center'>{day}</div>
      <div className='flex flex-row items-center'>
        <WeatherEmoji weatherConditions={conditions} />
        <div>
          <p>conditions: {conditions}</p>
          <p>maxTemp: {maxTemp} °C {maxTemp >= 35 ? <label className='bg-red-500 text-white rounded-md px-2 py-1'>Heatwave warning</label> : undefined}</p>
          <p>wind: {wind} km/h {wind >= 30 ? <label className='bg-orange-500 text-white rounded-md px-2 py-1'>Strong wind warning</label> : undefined}</p>
        </div>
      </div>
      <div>
          <Button className='mx-5' onClick={showModal}>Hourly Temps</Button>
          <Modal handleClose={hideModal} show={show}>
            <HourlyTemp day={day} hourlyTemps={hourlyTemps}/>
          </Modal>
          {/* <div className={!show ? 'collapse' : 'visible'} >
            <HourlyTemp />
          </div> */}
      </div>
    </div>

  )
}

export default DailyWeather
