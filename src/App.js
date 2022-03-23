import MyNavbar from "./components/MyNavbar";
import Hero from "./components/Hero";
import Sections from "./components/Sections";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Hero />
      <Sections categoryId={2} />
      <Sections categoryId={1} />
      <Sections categoryId={5} />
    </div>
  );
}

export default App;
