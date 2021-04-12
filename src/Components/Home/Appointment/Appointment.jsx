import doctorsImg from "../../../images/doctorPic.png";

function Appointment() {
  return (
    <section className="py-5 my-5 container-fluid appointment">
      <div className="row">
        <div className="col-md-5 ml-5">
          <img
            src={doctorsImg}
            style={{ marginTop: "-145px" }}
            className="img-fluid"
            alt="Doctors Image"
          />
        </div>
        <div className="col-md-5 ml-5 mt-5">
          <h6 className="mb-3 text-primary">APPOINTMENT</h6>
          <h2 className="display-4 mb-3">Make an appointment Today</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            doloremque excepturi dolor inventore, culpa impedit natus,
            repellendus distinctio aliquam hic maxime modi pariatur.
          </p>
          <button className="btn btn-primary mt-5">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
