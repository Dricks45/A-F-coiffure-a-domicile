import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <img
          className="Logo"
          src="./src/images/A_et_F.png"
          alt="logo de a&f coifure"
        />
        <h1>A & F Coiffure à domicile</h1>
      </header>
      <main>
        <Outlet />
        <div className="page_link">
          <Link className="redirect" to="/accueil">
            Accueil
          </Link>
          <Link className="redirect" to="/galerie">
            Galerie
          </Link>
          <Link className="redirect" to="/tarifs">
            Tarifs
          </Link>
        </div>
      </main>
      <footer>
        <p className="para_footer">
          &copy; 2023 _ Andréa coiff _ Bodereau Cédric
        </p>
      </footer>
    </>
  );
}

export default App;
