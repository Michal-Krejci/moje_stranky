import "./index";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Uvod from "./components/Uvod";
import VzdelaniAPraxe from "./components/VzdelaniAPraxe";
import TechStack from "./components/TechStack";
import Kontakt from "./components/Kontakt";
import Ukazky from "./components/Ukazky";

const App = () => {
  return (
    <div>
      <Navbar />
      <Uvod />
      <TechStack />
      <VzdelaniAPraxe />
      <Kontakt />
      <Ukazky />
    </div>
  );
};

export default App;
