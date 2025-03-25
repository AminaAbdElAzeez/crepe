import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./MenusName.css";
import { Tooltip, Spin } from 'antd';
import { useTranslation } from "react-i18next";

function MenusName({ onMenuSelect }) {
  const color = "#333333";
  const [cities, setCities] = useState([]);
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL+'/api/front/cities', {
      headers: {
        'X-lang': i18n.language,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCities(data.data);
        }
      })
      .catch((error) => console.error('❌ خطأ في جلب الفروع:', error))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <Spin size='large' className='loading-spinner' />;
  }
  return (
    <section className="menus-name">
      <div className="container">
        <div className="menus-name-content">
        {cities.map((city, index) => (
            <Tooltip key={index} title={city.name} color={color}>
              <button to='#' onClick={() => onMenuSelect(city)}>
              {city.name}
              </button>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenusName;
