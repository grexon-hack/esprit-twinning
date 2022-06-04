import Banner from "./components/banner/banner.jsx";
import Slide from "./components/slider/slide.jsx";
import TopBanner from "./components/topBanner/topBanner.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TopBanner />
      <Slide />
      <Banner />
    </div>
  );
}
