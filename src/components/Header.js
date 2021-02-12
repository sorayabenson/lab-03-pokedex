import './Header.css';

function Header() {
  return (
    <header className="pokeHeader">
        <a className="headerLink" href="/">home</a>
        <h1 className="h1">pokedex!</h1>
        <a className="headerLink" href="/search">search</a>
    </header>
  );
}

export default Header;
