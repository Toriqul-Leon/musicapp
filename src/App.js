import "./App.css";
import DownloadMusic from "./components/DownloadMusic";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Footer from "./Footer";

function App() {
  return (
    <div className="text-white overflow-hidden">
      <Header></Header>
      <Hero></Hero>
      <Experience></Experience>
      <Search></Search>
      <DownloadMusic></DownloadMusic>
      <Footer></Footer>
    </div>
  );
}

export default App;
