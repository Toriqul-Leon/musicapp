import "./App.css";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="text-white overflow-hidden">
      <Header></Header>
      <Hero></Hero>
      <Experience></Experience>
    </div>
  );
}

export default App;
