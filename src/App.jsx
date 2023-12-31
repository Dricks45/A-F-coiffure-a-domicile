import { Link, Outlet } from "react-router-dom";
import "./App.css";
import logo from "./assets/images/A_et_F.png";

function App() {
  return (
    <>
      <header>
        <img className="Logo" src={logo} alt="logo de a&f coifure" />
        <h1 className="big_title">A & F Coiffure à domicile</h1>
        <hr />
      </header>
      <main>
        <div className="page_link">
          <Link className="redirect redirect_accueil" to="/accueil">
            Accueil
          </Link>
          <Link className="redirect redirect_galerie" to="/galerie">
            Galerie
          </Link>
          <Link className="redirect redirect_tarifs" to="/tarifs">
            Tarifs
          </Link>
        </div>
        <Outlet />
      </main>
      <div className="center-footer">
        <footer>
          <p className="paragraph_footer">
            &copy; 2023 _ Andréa coiff _ Bodereau Cédric
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
