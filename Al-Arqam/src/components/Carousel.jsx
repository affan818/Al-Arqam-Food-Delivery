import "./carousel.css";
const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "cover !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ backgroundColor: "ThreeDFace" }}
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active" data-bs-interval={2000}>
            <img
              src="https://source.unsplash.com/random/300×300/?kabab"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(30%)" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src="https://source.unsplash.com/random/300×300/?biryani"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(30%)" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img
              src="https://source.unsplash.com/random/300×500/?frychicken"
              className="d-block w-100"
              alt="..."
              style={{ filter: "brightness(30%)" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
