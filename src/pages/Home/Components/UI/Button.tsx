import React from 'react'

interface CustomButtonProps {
  lable: string
  primary?: boolean
}
const Button: React.FC<CustomButtonProps> = (props) => {
  return (
    <button
      className={[
        'text-base font-bold max-lg:text-sm px-12 max -lg:px-8 py-2 max-md:text-[12px] max-md:p-0 max-md:h-[32px] max-md:w-[140px] rounded-xl max-lg:rounded-lg',
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
