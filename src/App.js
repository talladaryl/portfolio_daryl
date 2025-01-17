import "./App.css";
import Menu from "./components/Menu";
import Accueil from "./components/Accueil"; // Un seul import du composant Accueil
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <Accueil />
    </div>
  );
}

export default App;
