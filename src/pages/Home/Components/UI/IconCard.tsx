import React from 'react'
interface IconCardProps {
  Icon: string
  alt?: string
}
const IconCard: React.FC<IconCardProps> = ({ Icon }) => {
  return (
    <div className="bg-card flex items-center justify-center text-center mx-3 h-[132] max-md:w-[100px] max-md:h-[100px] rounded-xl">
      <div className="flex items-center justify-center text-center">
        <img src={Icon} />
      </div>
    </div>
  )
}

export default IconCard
