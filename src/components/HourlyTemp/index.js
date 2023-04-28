import React from 'react'

const HourlyTemp = ({day, hourlyTemps}) => {

  return (
    <div className='container h-80 overflow-y-auto min-w-min'>
      <div className='mb-1 font-bold text-center'>{day}</div>
      <div className='mb-1 bg-slate-60 font-white flex flex-row items-center'>
        <div className='px-10 font-bold text-center'>Hrs (24hr system)</div>
        <div className='px-10 font-bold text-center'>Temperature (°C)</div>
      </div>
      <div className='container'>
        {hourlyTemps && hourlyTemps.length && hourlyTemps.map((temp, i) => {
          return(
            <div key={i} className='mb-1 border-b-2 border-slate-60 flex flex-row items-center justify-between'>
              <div className={`px-10 text-center ${temp >= 35 ? 'text-red-500' : 'text-black'}`}>{i} hrs</div>
              <div className={`px-10 text-center ${temp >= 35 ? 'text-red-500' : 'text-black'}`}>{temp}</div>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default HourlyTemp
