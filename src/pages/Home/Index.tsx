import Banner from './Components/Banner/Banner'
import Header from './Components/Navbar/Navbar'
const Home = () => {
  return (
    <div className="max-w-[1280px] m-auto py-4">
      <header className="space-y-20">
        <Header />
        <Banner />
      </header>
      <main></main>
      <footer></footer>
    </div>
  )
}

export default Home
