import About_us from '../../components/about_us/About_us'
import Announcements from '../../components/announcement/Announcements'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './home.css'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Announcements/>
        <Header/>
        <About_us/>
        <Footer/>
    </div>
  )
}

export default Home