import Navigation from "./Navigation.tsx";
import type {Hero} from "../utils/types";

interface HeaderProps {
  hero: Hero
}

const Header = ({hero}: HeaderProps) => {
  return (
    <header className="rounded-t-3xl bg-grey">
      <Navigation />
      <h1 className="text-center py-6 text-4xl">{hero.name}</h1>
    </header>
  );
};

export default Header;