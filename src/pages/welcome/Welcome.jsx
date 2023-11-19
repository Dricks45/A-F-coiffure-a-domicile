import "./welcome.scss";

function Welcome() {
  return (
    <section className="outlet">
      <p className="text_welcome">
        Le plaisir de se faire coiffer, sans se déplacer !
      </p>
      <article className="center_picture">
        <div className="animation_photo">
          <div className="container_photo_home">
            <img
              className="photo_home"
              src="../../src/images/photo_A_P_couve_451.jpg"
              alt=""
            />
          </div>
        </div>
      </article>
      <article className="info_contact">
        <p className="phone_welcome">07.82.32.11.79</p>
        <a
          className="email_welcome redirect_link"
          href="mailto:af.coiffure45@gmail.com"
        >
          af.coiffure45@gmail.com
        </a>
        <a
          className="facebook_welcome redirect_link"
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

export default Welcome;
