import "./accueil.scss";

function Accueil() {
  return (
    <section className="outlet">
      <p className="text-accueil">
        Le plaisir de se faire coiffer, sans se déplacer !
      </p>
      <div className="container-photo-home">
        <img
          className="photo-home"
          src="../../src/images/photo_A_P_couve_451.jpg"
          alt=""
        />
      </div>
      <div className="set-up-accueil"></div>
      <article className="info-contact">
        <p className="phone-accueil">07.82.32.11.79</p>
        <a
          className="email-accueil redirect-link"
          href="mailto:af.coiffure45@gmail.com"
        >
          af.coiffure45@gmail.com
        </a>
        <a
          className="facebook-accueil redirect-link"
          href="https://www.facebook.com/profile.php?id=100090420848243"
          target="_blank"
          rel="noreferrer"
        >
          Andréa Coiff
        </a>
      </article>
    </section>
  );
}

export default Accueil;
