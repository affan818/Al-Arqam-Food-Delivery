import cardImg1 from "../assets/donger.jpg";
let num = [1, 2, 3, 4, 5];

const Card = () => {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={cardImg1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">cards</p>
          <div className="container w-100">
            <select
              className="m-2 h-100 bg-success rounded"
              style={{ color: "white" }}
            >
              {num.map((e, i) => {
                return <option key={i}>{e}</option>;
              })}
            </select>
            <select
              className="m-2 h-100 bg-success rounded"
              style={{ color: "white" }}
            >
              <option className="size">Helf</option>
              <option className="size">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
