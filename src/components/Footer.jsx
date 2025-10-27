import "react";
import Adalab from "../images/logo-adalab.webp";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Adalab} alt="logo adalab" className="img-footer" />
    </div>
  );
};

export default Footer;
