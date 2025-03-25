import MenuItem from "../MenuItem/MenuItem";
import "./MenuSection.css";
import { useTranslation } from "react-i18next";

export default function MenuSection({
  loopIndex,
  category,
  arabicCategory,
  items,
  image,
  categoryBg,
}) {
  const { i18n } = useTranslation();

  return (
    <div className="pages-menu-item">
      <div
        className="pages-menu-item-title"
        style={{ backgroundColor: categoryBg }}
      >
        <h3 className="pages-menu-item-h3 custom-font">
          {/*<span className={i18n.language === "ar" ? "hide-title" : ""}>
            {category}
          </span>
          <span className={i18n.language === "en" ? "hide-title" : ""}>
            {arabicCategory}
          </span>*/}

          {document.dir === "rtl" ? arabicCategory : category}
        </h3>
        <div className="line"></div>
      </div>
      <ul className="menu-item-list">
        {items.map((item, index) => {
          console.log(item);
          return <MenuItem key={index} {...item} />;
        })}
      </ul>

      {image && (
        <div className="menu-item-img">
          <img src={image} alt={`${category}`} />
        </div>
      )}
    </div>
  );
}
