import { ReactComponent as Brand } from '../../../assets/Brand.svg'
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
      <div className="flex items-center space-x-12">
        <Brand />
        <ul className="flex space-x-12">
          {routes.map((value: string, index: number) => {
            return (
              <li
                key={index}
                className={[
                  'font-bold text-sm cursor-pointer',
                  active === index ? 'text-primary' : 'text-text',
                ].join(' ')}
              >
                {value}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex space-x-2">
        <button className="bg-background rounded-xl px-9 py-3 font-bold text-sm shadow">
          Login
        </button>
        <button className="bg-primary text-white rounded-xl px-9 py-3 font-bold shadow text-sm">
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Navbar
