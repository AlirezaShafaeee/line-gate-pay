import BannerImage from '../../../../assets/Banner.png'
import Button from '../UI/Button'
const Banner = () => {
  return (
    <section className="flex justify-between max-md:flex-col max-md:items-center max-md:text-center max-md:space-y-10 text-left items-start">
      <div className=" mt-14 max-md:mt-0 max-lg:mt-6 flex flex-col justify-between space-y-20 max-lg:space-y-10">
        <div className="text-text">
          <h4 className="text-sm max-lg:text-[13px] max-md:text-[10px] font-normal">
            FAST. CONVENIENT. SECURE.
          </h4>
          <h1 className="text-[52px] max-lg:text-[40px] max-md:text-[32px] font-bold leading-12 max-md:leading-10">
            Payment Gateway <br />
            On Your <span className="text-primary">Website</span>
          </h1>
          <h5 className="text-sm max-lg:text-[12px] font-normal w-4/5 max-md:w-full">
            Grow your business with a gateway that will save you time and money
          </h5>
        </div>
        <div className="space-y-2 max-md:hidden">
          <div className="space-x-2">
            <Button lable="Sing up now" />
            <Button lable="Talk to Sales" primary />
          </div>
          <div className="text-xs max-lg:text-[10px] text-text">
            Sign up for free in 2 clicks • Easy setup in 2 minutes •<br /> Tech
            support 24/7
          </div>
        </div>
      </div>
      <div className="w-[800px] max-xl:w-[600px] max-lg:w-3/6 max-md:w-4/6 max-sm:w-5/6">
        <img alt="Line gatepay Banner" src={BannerImage} />
      </div>

      <div className="space-y-2 hidden max-md:block">
        <div className="space-x-2 max-md:flex max-md:items-center max-md:justify-between">
          <Button lable="Sing up now" />
          <Button lable="Talk to Sales" primary />
        </div>
        <div className="text-xs max-lg:text-[10px] text-text">
          Sign up for free in 2 clicks • Easy setup in 2 minutes •<br /> Tech
          support 24/7
        </div>
      </div>
    </section>
  )
}

export default Banner
