import "./gallery.scss";

function Gallery() {
  return (
    <section className="outlet">
      <article className="flex_gallery">
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
        </div>
      </article>
    </section>
  );
}

export default Gallery;
