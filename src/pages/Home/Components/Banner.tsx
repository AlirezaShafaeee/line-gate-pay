import BannerImage from '../../../assets/Banner.png'
import Button from './UI/Button'
const Banner = () => {
  return (
    <section className="flex justify-between items-start">
      <div className="text-left flex flex-col justify-between space-y-20">
        <div className="text-text">
          <h4 className="text-sm font-normal">FAST. CONVENIENT. SECURE.</h4>
          <h1 className="text-[52px] font-bold leading-12">
            Payment Gateway <br />
            On Your <span className="text-primary">Website</span>
          </h1>
          <h5 className="text-sm font-normal w-4/5">
            Grow your business with a gateway that will save you time and money
          </h5>
        </div>
        <div className="space-y-2">
          <div className="space-x-2">
            <Button lable="Sing up now" />
            <Button lable="Talk to Sales" primary />
          </div>
          <div className="text-xs text-text">
            Sign up for free in 2 clicks • Easy setup in 2 minutes •<br /> Tech
            support 24/7
          </div>
        </div>
      </div>
      <div>
        <img width={650} alt="Line gatepay Banner" src={BannerImage} />
      </div>
    </section>
  )
}

export default Banner
