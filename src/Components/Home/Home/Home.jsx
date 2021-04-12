import Appointment from "../Appointment/Appointment";
import Header from "../Header/Header";
import Services from "../Services/Services";

function Home() {
  return (
    <div>
      <Header />
      <Services />
      <Appointment />
    </div>
  );
}

export default Home;
