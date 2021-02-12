import './Header.css';
import { NavLink, withRouter } from 'react-router-dom';

function Header() {
  return (
    <nav 
    className="pokeHeader"
    role="navigation"
    aria-label="main navigation">
        <NavLink className="headerLink" 
        to="/"
        exact>home</NavLink>
        <h1 className="h1">pokedex!</h1>
        <NavLink className="headerLink"
        to="/search"
        exact>search</NavLink>
    </nav>
  );
}

export default withRouter(Header);
