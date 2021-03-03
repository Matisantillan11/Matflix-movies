import Carousel from "./Components/Carousel";
import CarouselItem from "./Components/CarouselItem";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />

      <Categories title="Top Movies">
        <Carousel />
      </Categories>
      {/* <Categories title="Top movies">
        <Carousel />
      </Categories>
      <Categories title="Top Series">
        <Carousel />
      </Categories> */}

      <Footer />
    </div>
  );
}

export default App;
