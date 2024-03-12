import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodItem, setFoodItem] = useState([]);
  const [foodCate, setFoodCate] = useState([]);
  const loadData = async () => {
    axios
      .post("http://localhost:3000/fooddata", {
        "Content-Type": "application/json",
      })
      .then((result) => {
        return result.data;
      })
      .then((data) => {
        setFoodCate(data[1]);
        setFoodItem(data[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <div>
        <div
          id="carouselExampleInterval"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "cover !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  style={{ backgroundColor: "ThreeDFace" }}
                />
                {/* <button className="btn btn-outline-warning" type="submit">
                Search
              </button> */}
              </div>
            </div>
            <div className="carousel-item active" data-bs-interval={2000}>
              <img
                src="https://source.unsplash.com/random/300×300/?pitas"
                className="d-block w-100"
                alt="..."
                style={{ filter: "brightness(30%)" }}
              />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src="https://source.unsplash.com/random/300×300/?fish and chips"
                className="d-block w-100"
                alt="..."
                style={{ filter: "brightness(30%)" }}
              />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src="https://source.unsplash.com/random/300×500/?sandwiches"
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
      <div className="container">
        {foodCate !== 0 ? (
          foodCate.map((data) => {
            return (
              <div key={data._id} className="row mb-3">
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {foodItem !== 0
                  ? foodItem
                      .filter((item) => {
                        return (
                          item.CategoryName === data.CategoryName &&
                          item.name
                            .toLowerCase()
                            .includes(search.toLocaleLowerCase())
                        );
                      })
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-sm-6 col-lg-3"
                          >
                            <Card
                              foodName={filterItems.name}
                              imgSrc={filterItems.img}
                              options={filterItems.options[0]}
                            />
                          </div>
                        );
                      })
                  : ""}
              </div>
            );
          })
        ) : (
          <div>Not Found</div>
        )}
      </div>
    </div>
  );
};

export default Home;
