import { ReactComponent as Brand } from '../../../../assets/Brand.svg'
const routes = [
  'Home',
  'Business',
  'Personal',
  'Pricing',
  'Plugins',
  'API',
  'Blog',
]
const active: number = 0
const Navbar = () => {
  return (
    <nav className="text-text flex justify-between items-center">
      <div className="flex items-center space-x-12 max-xl:space-x-7 max-md:justify-between max-md:w-full">
        <button className="w-[42px] h-[42px] bg-card_light rounded-xl justify-center items-center  max-md:flex hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
          >
            <rect y="12" width="20" height="4" rx="2" fill="#1093FF" />
            <rect y="6" width="20" height="4" rx="2" fill="#99D1FF" />
            <rect width="20" height="4" rx="2" fill="#1093FF" />
          </svg>
        </button>
        <Brand className="max-xl:w-[100px]" />
        <ul className="flex space-x-12 max-xl:space-x-8 max-lg:space-x-6 max-lg:hidden">
          {routes.map((value: string, index: number) => {
            return (
              <li
                key={index}
                className={[
                  'font-bold text-sm max-xl:text-[12px] max-lg:text-xs relative cursor-pointer',
                  active === index ? 'text-primary' : 'text-text',
                  active === index
                    ? "after:content-['.'] after:absolute after:-bottom-4 after:left-[40%] after:text-primary block after:text-3xl"
                    : '',
                ].join(' ')}
              >
                {value}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex space-x-2 max-md:hidden">
        <button className="bg-background shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl max-xl:rounded-lg max-xl:shadow-sm max-xl:px-6 max-xl:py-2 px-9 py-3 max-lg:px-7 max-lg:text-[12px] font-bold text-sm">
          Login
        </button>
        <button className="bg-primary text-white rounded-xl  max-xl:px-6 max-xl:py-2 max-xl:rounded-lg  px-9 py-3 font-bold max-lg:text-[12px] max-lg:px-7  shadow-[0px_10px_20px_0px_#1093ff33] text-sm">
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Navbar
