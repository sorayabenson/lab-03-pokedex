import './Search.css';
import Header from './Header.js';

function Search() {
  return (
    <div className="search">
        <Header />
        <main className="searchMain">
            <div className="sidebar">
                <input className="search"></input>
                <button className="searchButton">find that pokemon!</button>
                <select className="pokeSelect">
                    <option>name</option>
                    <option>type</option>
                    <option>attack</option>
                    <option>defense</option>
                </select>
                <select className="pokeSelect">
                    <option>ascending</option>
                    <option>descending</option>
                </select>
            </div>
            <div className="pokeDisplay">
                <p>pokes here</p>
            </div>

        </main>
    </div>
  );
}

export default Search;
