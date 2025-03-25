import React from "react";
import "./Dawnload.css";
import image1 from "../../assets/Mask group.png";
import { useTranslation, Trans } from "react-i18next";
import Cards from "../Cards/Cards";
import DawnloadText from "../DawnloadText/DawnloadText";

function Dawnload() {
  const { t } = useTranslation();

  return (
    <section className="download">
      <div className="container">
        <div className="download-container">
          <div className="download-content">
            <div className="download-left">
              <h1 className="download-title">
                <Trans
                  i18nKey="mainTitle"
                  components={{
                    span: <span />,
                    br: <br />,
                  }}
                />
              </h1>
              <p>
                <Trans
                  i18nKey="mainDesc"
                  components={{
                    br: <br />,
                  }}
                />
              </p>
            </div>
            <div className="download-right">
              <img src={image1} alt="image" />
            </div>
          </div>
        </div>
      </div>
      <Cards />
      {/*<DawnloadText/>*/}
    </section>
  );
}

export default Dawnload;
