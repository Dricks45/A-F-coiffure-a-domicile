import { Link } from "react-router-dom";
import "./gallery.scss";

function Gallery() {
  return (
    <section className="outlet">
      <article className="flex_gallery">
        <figure className="view_gallery">
          <div className="container_gallery">
            <img
              className="picture_gallery"
              src="../../src/images/photo_A_P_08_450.jpg"
              alt="photo 4"
            />
            <img
              className="picture_gallery"
              src="../../src/images/photo_A_P_05_450.jpg"
              alt="photo 2"
            />
            <img
              className="picture_gallery"
              src="../../src/images/photo_A_P_06_450.jpg"
              alt="photo 3"
            />
            <img
              className="picture_gallery"
              src="../../src/images/photo_A_P_09_450.jpg"
              alt="photo 5"
            />
            <img
              className="picture_gallery"
              src="../../src/images/photo_A_P_10_450.jpg"
              alt="photo 6"
            />
            <img
              className="picture_gallery"
              src="../../src/images/photo_A_P_04_450.jpg"
              alt="photo 1"
            />
            <img
              className="picture_gallery repeat_photo"
              src="../../src/images/photo_A_P_08_450.jpg"
              alt="photo 4"
            />
          </div>
        </figure>
      </article>
      <div className="more_gallery">
        <Link
          className="more_pictures"
          to="https://www.facebook.com/profile.php?id=100090420848243&sk=photos_by"
          target="_blank"
        >
          Plus de photos
        </Link>
      </div>
    </section>
  );
}

export default Gallery;
