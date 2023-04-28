import React from 'react'

export const Button = ({onClick, className, children}) => {
  console.log(className)
  return (
    <button onClick={onClick} className={`border-none hover:shadow-xl bg-fuchsia-500 text-white cursor-pointer rounded-lg p-2 ${className}`}>{children}</button>
  )
}

export default Button
