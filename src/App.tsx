import {useState} from "react";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";


function App() {
  const [heroName, setHeroName] = useState("Luke Skywalker");
  return (
    <div className={'mx-2'}>
      <Header heroName={heroName} />
      <Main setHeroName={setHeroName} />
      <Footer />
    </div>
  )
}

export default App
