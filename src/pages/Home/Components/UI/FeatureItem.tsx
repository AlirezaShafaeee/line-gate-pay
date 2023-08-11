import React from 'react'
interface featureProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  active?: string
  lable: string
  subLable: string
}
const FeatureItem: React.FC<featureProps> = ({
  Icon,
  subLable,
  lable,
  active,
}) => {
  return (
    <div className="transition cursor-default flex-1 text-center flex flex-col items-center py-10 rounded-xl bg-card hover:shadow-[0px_50px_60px_-15px_#0000001a] shadow-sm">
      <Icon className='max-md:w-[49px] max-md:h-[49px]'/>
      <span className="text-text text-lg font-bold">{lable}</span>
      <span className="w-9/12">
        {subLable}
        <span className="text-primary font-bold"> {active ? active : ''}</span>
      </span>
    </div>
  )
}

export default FeatureItem
