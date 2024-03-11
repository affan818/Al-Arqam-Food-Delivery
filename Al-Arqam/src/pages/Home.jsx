import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
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
        <Carousel />
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
                        return item.CategoryName === data.CategoryName;
                      })
                      .map((filterItems) => {
                        return (
                          <div key={filterItems._id} className="col-12 col-sm-6 col-lg-3">
                            <Card />
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
