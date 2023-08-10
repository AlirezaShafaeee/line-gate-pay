import React from 'react'
interface IconCardProps {
    url : string,
    alt : string
}
const IconCard :React.FC<IconCardProps> = (props) => {
  return (
    <div className='bg-card flex p-3 w-28 rounded-xl'>
        <div className=''>
            <img src={props.url} alt={props.alt} />
        </div>
    </div>
  )
}

export default IconCard