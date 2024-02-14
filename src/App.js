import"./app.scss"
import Navbar from "./components/navbar/Navbar"
import Prezentare from "./components/prezentare/Prezentare";
import Profil from "./components/profil/profil";



function App() {
  return <div>
<section id="Homepage">
  <Navbar/>
  <Profil/>
  </section>

<section id="Services"><Prezentare type="servici"/></section>
<section>Services</section>
<section id="Portofolio"><Prezentare type="portofoliu"/></section>
<section>Portofoliu1</section>
<section>Portofoliu2</section>
<section>Portofoliu3</section>
<section id="Contact">Contact</section>

<Profil/>
  </div>
};

export default App;
