import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import MainInro from "../components/HomePage/MainIntro"
function Home() {
  return (
    <div className="min-h-screen">
      <Header location={"home"} />
      <MainInro />
      <Footer />
    </div>
  )
}

export default Home