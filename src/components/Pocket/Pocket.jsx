import image1 from "../../assets/AppStoreBlack.png";
import image2 from "../../assets/GooglePlayBlack.png";
import image3 from "../../assets/Group 51777.png";
import "./Pocket.css";
import { useTranslation } from "react-i18next";

function Pocket() {
  const { t } = useTranslation();

  return (
    <section className="pocket">
      <div className="container">
        <div className="pocket-content">
          <div className="pocket-item-left">
            <h3 className="pocket-item-title">{t("pocketTitle")}</h3>
            <p>{t("pocketDesc")}</p>
            <div className="pocket-icon">
              <img src={image1} alt="image" />
              <img src={image2} alt="image" />
            </div>
          </div>
          <div className="pocket-item-right">
            <img src={image3} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pocket;
