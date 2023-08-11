import Banner from './Components/Header/Banner'
import Header from './Components/Header/Navbar'
import Features from './Sections/Features'
import {ReactComponent as Background } from '../../assets/BACKGROUND.svg'
const Home = () => {
  return (
    <div className="relative px-10 max-md:px-5 m-auto overflow-hidden cursor-default">
      <Background className='absolute overflow-hidden -top-20 right-0 w-8/12  -z-10'/>
      <header className="space-y-14 mt-4 max-w-[1280px] m-auto">
        <Header />
        <Banner />
      </header>
      <main className="max-w-[1280px] m-auto">
        <Features />
      </main>
      <footer></footer>
    </div>
  )
}

export default Home
