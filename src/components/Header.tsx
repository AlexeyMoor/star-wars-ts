import Navigation from "./Navigation.tsx";

interface HeaderProps {
  heroName: string,
}

const Header = ({heroName}: HeaderProps) => {
  return (
    <header className="rounded-t-3xl bg-grey">
      <Navigation />
      <h1 className="text-center py-6 text-4xl">{heroName}</h1>
    </header>
  );
};

export default Header;