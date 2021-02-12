import './Header.css';

function Header() {
  return (
    <header className="pokeHeader">
        <h1 className="h1">pokedex!</h1>
        <div className="linkWrapper">    
            <a className="headerLink" href="/">home</a>
            <a className="headerLink" href="/search">search</a>
        </div>
    </header>
  );
}

export default Header;
