import image1 from "../../assets/fb-ic.svg";
import image2 from "../../assets/insta-ic.svg";
import "./Footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          {/* <ul className="footer-left">
            <li>{t("aboutUs")}</li>
            <li>{t("privacy")}</li>
            <li>{t("terms")}</li>
          </ul> */}
          {/*<ul className="footer-right">
            <li>
              <img src={image1} alt="image" />
            </li>
            <li>
              <img src={image2} alt="image" />
            </li>
          </ul>*/}
        </div>
        <hr />
        <p className="copyright">{t("copyright")}</p>
      </div>
    </footer>
  );
}

export default Footer;
