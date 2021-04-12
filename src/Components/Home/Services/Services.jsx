import img_1 from "../../../images/service-1.png";
import img_2 from "../../../images/service-2.png";
import img_3 from "../../../images/service-3.png";
import Service from "./Service";

const data = [
  {
    title: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio vitae accusantium nobis corporis ab fugit ipsum pariatur magnam , quas sunt?",
    img: img_1,
  },
  {
    title: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio vitae accusantium nobis corporis ab fugit ipsum pariatur magnam , quas sunt?",
    img: img_2,
  },
  {
    title: "Teath Whitening",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio vitae accusantium nobis corporis ab fugit ipsum pariatur magnam  nostrum sed, quas sunt?",
    img: img_3,
  },
];

function Services() {
  return (
    <section className="py-5 my-5">
      <div className="mb-5">
        <h6 className="text-primary text-center">OUR SERVICES</h6>
        <h3 className="text-center">Services We Provide</h3>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row w-75">
          {data.map((item, i) => (
            <Service item={item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
