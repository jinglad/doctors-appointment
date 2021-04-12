function Service({ item }) {
  const { title, description, img } = item;

  return (
    <div className="col-md-4">
      <div>
        <div className="d-flex justify-content-center">
          <img style={{ height: "120px" }} src={img} alt="" />
        </div>
        <div className="text-center mt-3">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
