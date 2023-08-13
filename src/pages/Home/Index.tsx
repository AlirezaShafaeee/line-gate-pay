import Advantages from './Components/Advantages/Advantages'
import Boost from './Components/Boost/Boost'
import Develop from './Components/Develop/Develop'
import Register from './Components/Register/Register'
import Banner from './Components/Header/Banner'
import Header from './Components/Header/Navbar'
import Features from './Sections/Features'
import Footer from './Components/Footer/Footer'
import Code from './Components/Code/Code'

const Home = () => {
  return (
    <div className=" m-auto py-4 overflow-hidden">
      <header className="space-y-20 max-w-[1280px] m-auto">
        <Header />
        <Banner />

      </header>
      <main className="max-w-[1280px] m-auto grid grid-cols-1 gap-y-10">
        <Features />
  

      </main>
      <div className='bg-[#FAFAFA]  py-[100px]'>
        <Code/>
      </div>
      <div className='bg-[#F5F5F5] py-[50px]'>
        <Boost/>
      </div>
      <div className='bg-[#FAFAFA] space-y-[80px] pt-[80px] pb-[20px]'>
        <Advantages/>
        <Develop/>
        <Register/>
      </div>


      <footer className='w-full bg-card_shade'>
        <Footer/>
      </footer>
    </div>
  )
}

export default Home
