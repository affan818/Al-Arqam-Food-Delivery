import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <div><Carousel /></div>
     <div className="m-3"> <Card /> </div>
    </div>
  );
};

export default Home;
