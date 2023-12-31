import { Link } from "react-router-dom";
import "./gallery.scss";
import photo4 from "../../assets/images/photo_A_P_08_450.jpg";
import photo2 from "../../assets/images/photo_A_P_05_450.jpg";
import photo3 from "../../assets/images/photo_A_P_06_450.jpg";
import photo5 from "../../assets/images/photo_A_P_09_450.jpg";
import photo6 from "../../assets/images/photo_A_P_10_450.jpg";
import photo1 from "../../assets/images/photo_A_P_04_450.jpg";

function Gallery() {
  return (
    <section className="outlet">
      <article className="flex_gallery">
        <figure className="view_gallery">
          <div className="container_gallery">
            <img className="picture_gallery" src={photo4} alt="photo 4" />
            <img className="picture_gallery" src={photo2} alt="photo 2" />
            <img className="picture_gallery" src={photo3} alt="photo 3" />
            <img className="picture_gallery" src={photo5} alt="photo 5" />
            <img className="picture_gallery" src={photo6} alt="photo 6" />
            <img className="picture_gallery" src={photo1} alt="photo 1" />
            <img
              className="picture_gallery repeat_photo"
              src={photo4}
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
