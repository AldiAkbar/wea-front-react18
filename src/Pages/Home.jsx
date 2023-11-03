import Header from "../Components/Home/Header"
import Face from "../Components/Home/Face"
import Fitur from "../Components/Home/Fitur"
import Deskripsi from "../Components/Home/Deskripsi"
import Footer from "../Components/Home/Footer"

const Home = () => {
  return (
    <div className="max-w-screen">
        <Header />
        <Face />
        <Fitur />
        <Deskripsi />
        <Footer />
    </div>
  )
}

export default Home