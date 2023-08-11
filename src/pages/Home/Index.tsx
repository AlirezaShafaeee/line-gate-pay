import Banner from './Components/Header/Banner'
import Header from './Components/Header/Navbar'
import Features from './Sections/Features'

const Home = () => {
  return (
    <div className=" m-auto py-4 overflow-hidden">
      <header className="space-y-20 max-w-[1280px] m-auto">
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
