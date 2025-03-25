import image1 from "../../assets/Frame.png";
import image2 from "../../assets/Frame1.png";
import image3 from "../../assets/Frame2.png";
import "./Services.css";
import { useTranslation, Trans } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  return (
    <section className="services">
      <div className="container">
        <div className="services-content">
          <div className="services-item">
            <img src={image1} />
            <h3 className="service-title">
              <Trans
                i18nKey="serviceTitle1"
                components={{
                  br: <br />,
                }}
              />
            </h3>
            <p>
              <Trans
                i18nKey="serviceDesc1"
                components={{
                  br: <br />,
                }}
              />
            </p>
          </div>
          <div className="services-item">
            <img src={image2} />
            <h3 className="service-title">
              <Trans
                i18nKey="serviceTitle2"
                components={{
                  br: <br />,
                }}
              />
            </h3>
            <p>
              <Trans
                i18nKey="serviceDesc2"
                components={{
                  br: <br />,
                }}
              />
            </p>
          </div>
          <div className="services-item">
            <img src={image3} />
            <h3 className="service-title">
              <Trans
                i18nKey="serviceTitle3"
                components={{
                  br: <br />,
                }}
              />
            </h3>
            <p>
              <Trans
                i18nKey="serviceDesc3"
                components={{
                  br: <br />,
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
