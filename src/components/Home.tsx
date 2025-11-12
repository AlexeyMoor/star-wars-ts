import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import {characters, defaultHero} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";

const Home = () => {
  const {heroId = defaultHero} = useParams();
  const heroExists = heroId in characters;
  const {changeHero} = useContext(SWContext);

  useEffect(() => {
    if (!heroExists) {
      return;
    }
    changeHero(heroId);
  }, [heroId, changeHero, heroExists]);

  if (!heroExists) {
    return <ErrorPage />;
  }


  return (
    <main>
      <Hero />
      <DreamTeam />
      <OpeningCrawl />
    </main>
  );
};

export default Home;