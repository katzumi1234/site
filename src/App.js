import"./app.scss"
import Navbar from "./components/navbar/Navbar"
import Prezentare from "./components/prezentare/prezentare";
import Profil from "./components/profil/profil";
import Servici from "./components/servici/servici";
import Portofoliu from "./portofoliu/Portofoliu";



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
<section><Portofoliu/></section>
<section id="Contact">Contact</section>
  </div>
};

export default App;
