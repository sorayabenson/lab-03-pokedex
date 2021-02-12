import './Home.css';
import Header from './Header.js';

function Home() {
  return (
    <div className="home">
        <Header />
        <main className="homeMain">
            <img src="https://i.pinimg.com/originals/66/89/dc/6689dc331be27e66349ce9a4d15ddff3.gif" alt="running pikachu" />
            <h1>gotta catch them all!</h1>
        </main>
    </div>
  );
}

export default Home;
