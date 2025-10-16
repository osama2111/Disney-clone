import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ProductionHouse from "./Components/ProductionHouse";
import MovieList from "./Components/MovieList";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-900 transition-colors duration-300">
      <Header />
      <HeroSection />
      <ProductionHouse />
      <MovieList />
      <Footer />
    </div>
  )
}

export default App
