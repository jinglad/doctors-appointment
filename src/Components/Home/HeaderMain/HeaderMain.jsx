import HeaderImg from "../../../images/headerImg.png";

function HeaderMain() {
  return (
    <div className="row d-flex align-items-center my-5">
      <div className="col-md-4 offset-md-1">
        <h1 className="display-4 mb-3">
          Your New Smile <br /> Starts Here
        </h1>
        <p style={{ fontWeight: "500" }} className="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio ab
          iste ducimus sapiente. Harum aspernatur odio eius inventore provident
          fuga vitae saepe, nam nostrum? Perferendis odit ab rem reprehenderit
          labore.
        </p>
        <button className="btn btn-primary">Get Appointment</button>
      </div>
      <div className="col-md-6">
        <img src={HeaderImg} className="w-100" alt="" />
      </div>
    </div>
  );
}

export default HeaderMain;
