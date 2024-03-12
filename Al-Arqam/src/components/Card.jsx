let num = [1, 2, 3, 4, 5];

// eslint-disable-next-line react/prop-types
const Card = ({ foodName, imgSrc, options }) => {
  let priceOption = Object.keys(options);
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src={imgSrc}
          className="card-img-top"
          alt="..."
          style={{ width: "18rem", maxHeight: "11rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{foodName}</h5>
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
            >
              {priceOption.map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
