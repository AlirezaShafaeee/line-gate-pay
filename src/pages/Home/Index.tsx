import Banner from './Components/Banner'
import Features from './Components/Features'
import Header from './Components/Navbar'
import { ReactComponent as TagPrice } from './Assets/Tag Price.svg'
import { ReactComponent as Restart } from './Assets/Restart Square.svg'
import { ReactComponent as Eye } from './Assets/Eye Scan.svg'
import CoinRow from './Components/CoinRow'
const Home = () => {
  return (
    <div className="max-w-[1280px] m-auto py-4">
      <header className="space-y-20">
        <Header />
        <Banner />
      </header>
      <main>
        <section className="bg-card space-x-4 flex justify-between items-center">
          <Features
            Icon={Eye}
            lable="Privacy"
            subLable="No proof of identity needed; we don’t keep transaction details"
          />
          <Features
            Icon={TagPrice}
            lable="Mass Payouts"
            subLable="Pool all your transactions together"
            active="saving 80% on fees"
          />
          <Features
            Icon={Restart}
            lable="0% chargeback"
            subLable="Transactions cannot be canceled or reversed on Blockchain"
          />
        </section>
        <section className="mt-32 text-center">
          <h3 className="text-text text-[18px] font-bold">
            Accept <span className="text-primary">15+ Supported Coins</span> on
            Your Website
          </h3>
          <CoinRow />
        </section>
      </main>
      <footer></footer>
    </div>
  )
}

export default Home
