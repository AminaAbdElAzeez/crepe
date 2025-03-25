import { useEffect, useState } from "react";
import { Spin } from "antd";
import "./CityMenu.css";
import MenuSection from "../../components/MenuSection/MenuSection";
import { menuItems } from "../../components/Data/Cairo.jsx";
import Header from "../../components/Header/Header.jsx";
import { useTranslation } from "react-i18next";
import image8 from "../../assets/footer.png";

function CityMenu({ selectedMenu }) {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [menuData, setMenuData] = useState([]);
  let loopIndex = 0;
  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL + "/api/front/productsByCategories", {
      headers: {
        "X-lang": i18n.language,
        "X-city": selectedMenu.id,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMenuData(data.data);
        }
      })
      .catch((error) => console.error("❌ خطأ في جلب الفروع:", error))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <Spin size="large" className="loading-spinner" />;
  }
  return (
    <section className="cairo-page">
      <Header title={t("menu") + " " + selectedMenu.name} />
      <div className="pages-menu-content">
        <div className="pages-menu-left">
          {menuData
            .slice(0, Math.ceil(menuData.length / 2))
            .map((menu, index) => {
              loopIndex = loopIndex == 0 ? 1 : 0;
              return (
                <MenuSection loopIndex={loopIndex} key={index} {...menu} />
              );
            })}
        </div>
        <div className="pages-menu-right">
          {menuData.slice(Math.ceil(menuData.length / 2)).map((menu, index) => {
            loopIndex = loopIndex == 1 ? 0 : 1;
            return <MenuSection loopIndex={loopIndex} key={index} {...menu} />;
          })}
        </div>
      </div>

      <div className="cairo-img">
        <img
          src={selectedMenu.photo ? selectedMenu.photo : image8}
          alt="footer"
        />
      </div>
    </section>
  );
}

export default CityMenu;
