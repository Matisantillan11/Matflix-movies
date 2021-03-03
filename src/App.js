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

      <Categories title="My personal list">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Categories title="Top movies">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Categories title="Top Series">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
}

export default App;
