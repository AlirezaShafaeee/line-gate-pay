import Advantages from './Components/Advantages/Advantages'
import Boost from './Components/Boost/Boost'
import Develop from './Components/Develop/Develop'
import Register from './Components/Register/Register'
import Banner from './Components/Header/Banner'
import Header from './Components/Header/Navbar'
import Features from './Sections/Features'
import { ReactComponent as Background } from '../../assets/BACKGROUND.svg'
import Footer from './Components/Footer/Footer'
import Code from './Components/Code/Code'

const Home = () => {
  return (
    <div className="relative px-10 max-md:px-5 m-auto overflow-hidden cursor-default">
      <Background className="absolute overflow-hidden -top-20 right-0 w-8/12  -z-10" />
      <header className="space-y-14 mt-4 max-w-[1280px] m-auto">
        <Header />
        <Banner />
      </header>
      <main className="max-w-[1280px] m-auto grid grid-cols-1 gap-y-10">
        <Features />
        <Code />
        <Boost />
        <Advantages />
        <Develop />
        <Register />
      </main>
      <footer className="w-full bg-card_shade">
        <Footer />
      </footer>
    </div>
  )
}

export default Home
