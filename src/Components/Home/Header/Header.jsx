import HeaderBottom from "../HeaderBottom/HeaderBottom";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <div className="container-fluid header-bg">
      <Navbar />
      <HeaderMain />
      <HeaderBottom />
    </div>
  );
}

export default Header;
