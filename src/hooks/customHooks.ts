import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";

export const useValidHero = () => {
  const {heroId = defaultHero} = useParams();
  const {changeHero} = useContext(SWContext);
  const isValid = heroId in characters;

  useEffect(() => {
    if (isValid) {
      changeHero(heroId);
    } else {
      changeHero('');
    }
  }, [heroId, isValid, changeHero]);

  return {
    heroId,
    isValid,
  }
}