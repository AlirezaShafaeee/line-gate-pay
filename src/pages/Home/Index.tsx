import Advantages from './Components/Advantages/Advantages'
import Banner from './Components/Banner/Banner'
import Boost from './Components/Boost/Boost'
import Develop from './Components/Develop/Develop'
import Header from './Components/Navbar/Navbar'
import Register from './Components/Register/Register'
const Home = () => {
  return (
    <div className="max-w-[1280px] m-auto py-4">
      <header className="space-y-20">
        <Header />
        <Banner />
        <Boost/>
        <Advantages/>
        <Develop/>
        <Register/>
      </header>
      <main></main>
      <footer></footer>
    </div>
  )
}

export default Home
