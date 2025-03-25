import "./MenuItem.css";
import { Collapse } from "antd";
import { useTranslation } from "react-i18next";

export default function MenuItem({
  price,
  name,
  description,
  new: isNew,
  hot: isHot,
  cold: isCold,
  details,
}) {
  const { t } = useTranslation();
  const text = description?.trim();

  const label = (
    <div className="collapse-content">
      <div className="price-section custom-font">
        <span className="price custom-font">{price}</span>
        {isNew && <p className="menu-item-new custom-font">new</p>}
      </div>{" "}
      <>
        {/*{isNew && name !== "زنجر سوبربريم" && (
          <p className="menu-item-new">new</p>
        )}*/}
        {/*{(isHot || isCold) && (
          <div className="hot-cold">
            {isCold && <span className="cold"> {t("normal")}</span>}
            {isCold && isHot && <span className="cold"> / </span>}
            {isHot && <span className="hot">{t("spicy")}</span>}
          </div>
        )}*/}
      </>
      <div className="name-hot custom-font">
        <span className="name custom-font">{name}</span>
        {(isHot || isCold) && (
          <div className="hot-cold custom-font">
            {isCold && <span className="cold"> {t("normal")}</span>}
            {isCold && isHot && <span className="cold"> / </span>}
            {isHot && <span className="hot">{t("spicy")}</span>}
          </div>
        )}
      </div>
    </div>
  );
  return (
    <li>
      {text ? (
        <Collapse
          items={[
            {
              key: "1",
              label: <div>{label}</div>,
              children: <p className="collapse-text">{text}</p>,
            },
          ]}
          className="collapse custom-font"
        />
      ) : (
        <div className="no-collapse custom-font">{label}</div>
      )}
    </li>
  );
}
