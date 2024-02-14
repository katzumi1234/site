import"./app.scss"
import Navbar from "./components/navbar/Navbar"
import Prezentare from "./components/prezentare/prezentare";
import Profil from "./components/profil/profil";
import Servici from "./components/servici/servici";



function App() {
  return <div>
<section id="Homepage">
  <Navbar/>
  <Profil/>
  </section>

<section id="Services"><Prezentare type="servici"/></section>
<section><Servici/></section>
<div className="spatiu"></div>
<section id="Portfolio"><Prezentare type="portofoliu"/></section>
<section>Portofoliu1</section>
<section>Portofoliu2</section>
<section>Portofoliu3</section>
<section id="Contact">Contact</section>

<Profil/>
  </div>
};

export default App;
