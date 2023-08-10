import React from 'react'

interface CustomButtonProps {
  lable: string
  primary?: boolean
}
const Button: React.FC<CustomButtonProps> = (props) => {
  return (
    <button
      className={[
        'text-base font-bold px-12 py-2 rounded-xl',
        props.primary
          ? 'text-primary border border-primary'
          : 'bg-primary text-white',
      ].join(' ')}
    >
      {props.lable}
    </button>
  )
}

export default Button
