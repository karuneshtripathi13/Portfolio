import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
function App() {
  window.addEventListener("scroll",()=>{
    const scrollsz=window.innerHeight-30
    const scrolledy=window.scrollY
    console.log(scrolledy)
    if(Math.ceil(scrolledy)<=scrollsz)
    {
      document.getElementById("navpos").style.display="none"
    }
    else if(Math.ceil(scrolledy)>=scrollsz &&Math.ceil(scrolledy)<(2*scrollsz))
      {
        document.getElementById("navpos").style.display="flex"
        document.getElementById("sk").style.cssText="color:;font-weight:;font-size:;"
        document.getElementById("ab").style.cssText="color: black !important;background-color: gold;border-radius: 0.2vw;transition: background-color 0.5s ease-in;"
      }
    else if(Math.ceil(scrolledy)>=(2*scrollsz)&&Math.ceil(scrolledy)<(3*scrollsz)){
      document.getElementById("ab").style.cssText="color:;font-weight:;font-size:;"
      document.getElementById("sk").style.cssText="color: black !important;background-color: gold;border-radius: 0.2vw;transition: background-color 0.5s ease-in;"
      document.getElementById("ed").style.cssText="color:;font-weight:;font-size:;"
    }
    else if(Math.ceil(scrolledy)>=(3*scrollsz)&&Math.ceil(scrolledy)<(4*scrollsz)){
      document.getElementById("pr").style.cssText="color:;font-weight:;font-size:;"
      document.getElementById("sk").style.cssText="color:;font-weight:;font-size:;"
      document.getElementById("ed").style.cssText="color: black !important;background-color: gold;border-radius: 0.2vw;transition: background-color 0.5s ease-in;"
    }
    else if(Math.ceil(scrolledy)>=(4*scrollsz)&&Math.ceil(scrolledy)<(5*scrollsz)){
      document.getElementById("co").style.cssText="color:;font-weight:;font-size:;"
      document.getElementById("ed").style.cssText="color:;font-weight:;font-size:;"
      document.getElementById("pr").style.cssText="color: black !important;background-color: gold;border-radius: 0.2vw;transition: background-color 0.5s ease-in;"
    }
    else if(Math.ceil(scrolledy)>=(5*scrollsz)&&Math.ceil(scrolledy)<(6*scrollsz)){
      document.getElementById("pr").style.cssText="color:;font-weight:;font-size:;"
      document.getElementById("co").style.cssText="color: black !important;background-color: gold;border-radius: 0.2vw;transition: background-color 0.5s ease-in;"
    }
  })
  return (
    <div>
      <section id="Home">
          <Home/>
      </section>
      <div className="all">
        <Navbar/>
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
