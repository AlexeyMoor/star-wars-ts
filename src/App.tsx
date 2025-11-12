import {useState} from "react";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {characters} from "./utils/constants.ts";


function App() {
  const [heroKey, setHeroKey] = useState('luke');
  return (
    <div className={'mx-2'}>
      <Header hero={characters[heroKey]} />
      <Main setHeroKey={setHeroKey} />
      <Footer />
    </div>
  )
}

export default App
