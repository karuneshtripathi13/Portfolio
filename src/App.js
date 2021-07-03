import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
function App() {
  return (
    <div>
      <Navbar/>
      <div className="all">
      <section id="Home">
          <Home/>
        </section>
        <section id="AboutMe">
          Hello1
        </section>
        <section id="Skillset">
          Hello2
        </section>
        <section id="Education">
          Hello3
        </section>
        <section id="Projects">
          Hello 4
        </section>
        <section id="Contact">
          Hello 5
        </section>
      </div>
    </div>
  );
}

export default App;
