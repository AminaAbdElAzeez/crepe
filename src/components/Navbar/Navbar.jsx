import { Button } from "antd";
import logo from "../../assets/c&w-logo.4a595d99 1.png";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
    // AHMED BLTAGY : Please if you have any better solution for this reload the page instead of using window.location.reload()
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="links">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <div>
            <Button onClick={toggleLanguage} className="lang-toggle-btn">
              {i18n.language === "en" ? "Ar" : "En"}
            </Button>
            <a href="#contact" className="contact-btn">
              {t("contact")}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
