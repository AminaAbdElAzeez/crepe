import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Spin } from 'antd';
import "./App.css";
import About from "./components/About/About";
import Branches from "./components/Branches/Branches";
import Cards from "./components/Cards/Cards";
import Contact from "./components/Contact/Contact";
import Dawnload from "./components/Dawnload/Dawnload";
import Kinds from "./components/Kinds/Kinds";
import Pocket from "./components/Pocket/Pocket";
import Services from "./components/Services/Services";

function App() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [siteData, setSiteData] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL + '/api/front/siteData', {
      headers: {
        'X-lang': i18n.language
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSiteData(data.data);
        }
      })
      .catch((error) => console.error('❌ خطأ في جلب الفروع:', error))
      .finally(() => setLoading(false));
  }, []);
  
  if (loading) {
    return (
      <div className="App">
      <Spin size='large' className='loading-spinner' />
      </div>
    );
  }
  return (
    <div className="App">
      <Dawnload />
      {/*<Kinds />*/}
      <About siteData={siteData} />
      {/* <Cards /> */}
      {/*<Menus />*/}
      <Services />
      {/*<Branches />*/}
      <Contact />
      {/* <Pocket /> */}
    </div>
  );
}

export default App;
