import React, { useState } from "react";
import { Button, Card, Modal } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import image1 from "../../assets/Frame1.png";
import image2 from "../../assets/Frame.png";
import image3 from "../../assets/app.png";
import app1Image from "../../assets/AppStoreBlack.png";
import app2Image from "../../assets/GooglePlayBlack.png";

import "./Cards.css";
import MenusName from "../MenusName/MenusName";
import { useTranslation } from "react-i18next";
import BranchesName from "../BranchesName/BranchesName";
import Branches from "../Branches/Branches";
import CityMenu from "../../Routes/CityMenu/CityMenu";
import Header from "../Header/Header";

function Cards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [previousContent, setPreviousContent] = useState(null);
  const { t, i18n } = useTranslation();
  const [isLargeModal, setIsLargeModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const isFoodMenuModal =
    modalContent &&
    (modalContent.type === MenusName || modalContent.type === CityMenu);

  const showBranchesModal = () => {
    setPreviousContent(null);
    setModalTitle(t("branches"));
    setModalContent(<BranchesName onBranchSelect={handleBranchSelect} />);
    setIsModalOpen(true);
  };

  const showMenusModal = () => {
    setPreviousContent(null);
    setModalTitle(t("menus"));
    setModalContent(<MenusName onMenuSelect={handleMenuSelect} />);
    setIsModalOpen(true);
    setIsLargeModal(false);
  };

  // const handleMenuSelect = (menu) => {
  //   setPreviousContent(<MenusName onMenuSelect={handleMenuSelect} />);
  //   setIsLargeModal(true);
  //   setModalTitle(menu.name);
  //   setModalContent(<CityMenu selectedMenu={menu} />);

  // };

  const handleMenuSelect = (menu) => {
    handleCloseModal();
    setTimeout(() => {
      setPreviousContent(<MenusName onMenuSelect={handleMenuSelect} />);
      setIsLargeModal(true);
      setModalTitle(menu.name);
      setModalContent(<CityMenu selectedMenu={menu} />);
      setIsModalOpen(true);
    }, 300);
  };

  // const handleBranchSelect = (branch) => {
  //   setPreviousContent(<BranchesName onBranchSelect={handleBranchSelect} />);
  //   setModalTitle(branch.name);
  //   setModalContent(<Branches selectedBranch={branch} />);
  // };
  const handleBranchSelect = (branch) => {
    handleCloseModal();
    setTimeout(() => {
      setPreviousContent(<BranchesName onBranchSelect={handleBranchSelect} />);
      setModalTitle(branch.name);
      setModalContent(<Branches selectedBranch={branch} />);
      setIsModalOpen(true);
    }, 300);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setPreviousContent(null);
    setModalTitle("");
    setIsLargeModal(false);
  };

  const handleBack = () => {
    if (previousContent) {
      setModalContent(previousContent);
      setModalTitle(t("menus"));
      setPreviousContent(null);
    }
  };

  const showDownloadModal = () => {
    setPreviousContent(null);
    setModalContent(
      <div className="download-links">
        <button
          className="img-app"
          onClick={() =>
            window.open(
              "https://apps.apple.com/eg/app/crepe-waffle/id1456513640?l=ar",
              "_blank"
            )
          }
        >
          <img src={app1Image} alt="Android" />
        </button>
        <button
          className="img-app"
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.appssquare.cofferesturant&hl=en&pli=1",
              "_blank"
            )
          }
        >
          <img src={app2Image} alt="ios" />
        </button>
      </div>
    );
    setIsModalOpen(true);
  };

  return (
    <section className="cards">
      <div className="container">
        <div className="cards-content">
          <Card hoverable className="card-item">
            <img alt="Menus" src={image2} className="card-img" />
            <h4 className="card-title">{t("cardTitle2")}</h4>
            <Button
              type="primary"
              className="cards-item-btn"
              onClick={showMenusModal}
            >
              {t("learn")}
              {i18n.dir() === "rtl" ? (
                <DoubleLeftOutlined className="card-icon" />
              ) : (
                <DoubleRightOutlined className="card-icon" />
              )}
            </Button>
          </Card>
          <Card hoverable className="card-item">
            <img alt="Branches" src={image1} className="card-img" />
            <h4 className="card-title">{t("cardTitle1")}</h4>
            <Button
              type="primary"
              className="cards-item-btn"
              onClick={showBranchesModal}
            >
              {t("learn")}
              {i18n.dir() === "rtl" ? (
                <DoubleLeftOutlined className="card-icon" />
              ) : (
                <DoubleRightOutlined className="card-icon" />
              )}
            </Button>
          </Card>
          <Card hoverable className="card-item">
            <img alt="Download App" src={image3} className="dawnload-img" />
            <h4 className="card-title">{t("cardTitle3")}</h4>
            {/* <Button
              type="primary"
              className="cards-item-btn"
              onClick={() =>
                window.open("https://l.linklyhq.com/l/5raE", "_blank")
              }
            >
              {t("getStart")}
              {i18n.dir() === "rtl" ? (
                <DoubleLeftOutlined className="card-icon" />
              ) : (
                <DoubleRightOutlined className="card-icon" />
              )}
            </Button> */}

            <Button
              type="primary"
              className="cards-item-btn"
              onClick={showDownloadModal}
            >
              {t("getStart")}
              {i18n.dir() === "rtl" ? (
                <DoubleLeftOutlined className="card-icon" />
              ) : (
                <DoubleRightOutlined className="card-icon" />
              )}
            </Button>
          </Card>
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onCancel={handleCloseModal}
        title={
          <div
            style={{
              display: previousContent && !isFoodMenuModal ? "flex" : "none",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {previousContent && (
              <Button type="link" onClick={handleBack} className="backBtn">
                {i18n.dir() === "rtl" ? (
                  <>
                    <DoubleRightOutlined className="back-icon" />
                  </>
                ) : (
                  <>
                    <DoubleLeftOutlined className="back-icon" />
                  </>
                )}
              </Button>
            )}
            <Header title={modalTitle} />
          </div>
        }
        footer={null}
        style={{ top: previousContent ? -8 : 25, overflow: "hidden" }}
        className={isLargeModal ? "modalLarge" : ""}
      >
        <div
          className="modal-header"
          style={{
            display: previousContent && isFoodMenuModal ? "flex" : "none",
          }}
        >
          {previousContent ? (
            <>
              <Button type="link" onClick={handleBack} className="backBtn">
                {i18n.dir() === "rtl" ? (
                  <DoubleRightOutlined className="back-icon" />
                ) : (
                  <DoubleLeftOutlined className="back-icon" />
                )}
              </Button>

              <Header title={`${t("menu")} ${modalTitle}`} />

              {/* <h3 className="modal-title">{modalTitle}</h3> */}
            </>
          ) : (
            <div className="backBtn-placeholder"></div>
          )}
          <button type="link" onClick={handleCloseModal} className="closeBtn">
            ✖
          </button>
        </div>

        {modalContent}
      </Modal>
    </section>
  );
}

export default Cards;
