import { icon } from "@fortawesome/fontawesome-svg-core";
import { faClock, faMap } from "@fortawesome/free-regular-svg-icons";
import {
  faMapMarkedAlt,
  faMapMarker,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
  {
    title: "Opening Hours",
    description: "We are open 24/7",
    icon: faClock,
    bg: "bg-primary",
  },
  {
    title: "Visit Our Location",
    description: "Brooklyn, NY 10036, United States",
    icon: faMapMarkerAlt,
    bg: "bg-dark",
  },
  {
    title: "Contact us now",
    description: "+000123456789",
    icon: faPhone,
    bg: "bg-primary",
  },
];

function HeaderBottom() {
  return (
    <div className="d-flex justify-content-center">
      <div className="row w-75">
        {data.map((item) => (
          <div className="col-md-4">
            <div>
              <div
                className={`d-flex justify-content-center ${item.bg} p-3 text-white rounded`}
              >
                <div>
                  <FontAwesomeIcon className="info-icon" icon={item.icon} />
                </div>
                <div className="mt-3">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderBottom;
