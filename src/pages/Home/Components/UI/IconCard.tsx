import React from 'react'
interface IconCardProps {
  Icon: string,
  alt?: string
}
const IconCard :React.FC<IconCardProps> = ({Icon}) => {
  return (
    <div className='bg-card flex items-center justify-center text-center mx-3 h-[132] rounded-xl'>
        <div className='flex items-center justify-center text-center'>
            <img src={Icon}/>
        </div>
    </div>
  )
}

export default IconCard