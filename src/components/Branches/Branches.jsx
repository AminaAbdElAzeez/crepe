import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Card, Spin } from 'antd';
import './Branches.css';
import image1 from '../../assets/location-ic.png';
import image2 from '../../assets/Call.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';

function Branches({ selectedBranch }) {
  const { t, i18n } = useTranslation();
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL+'/api/front/branches/' + selectedBranch, {
      headers: {
        'X-lang': i18n.language,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log('🔹 بيانات الفروع المسترجعة:', data.data);
          setBranches(data.data);
        }
      })
      .catch((error) => console.error('❌ خطأ في جلب الفروع:', error))
      .finally(() => setLoading(false));
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  if (loading) {
    return <Spin size='large' className='loading-spinner' />;
  }

  return (
    <section className='branches'>
      <div className='container'>
        <div className='branches-slider'>
          {branches.length > 1 ? (
            <Slider {...settings}>
              {branches.map((branch, index) => (
                <Card className='branch-card' key={index}>
                  <div className='branch-content'>
                    <img src={image1} alt='location icon' />
                    <p className='branch-desc'>{branch.desc}</p>
                    <a
                      className='branch-address'
                      href={`https://www.google.com/maps?q=${branch.lat},${branch.long}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: '#1890ff', cursor: 'pointer' }}
                    >
                      {branch.address}
                    </a>
                    <p className='branch-phone'>
                      <img src={image2} alt='phone icon' />
                      {branch.phone}
                    </p>
                  </div>
                </Card>
              ))}
            </Slider>
          ) : (
            branches.map((branch, index) => (
              <Card className='branch-card single-branch' key={index}>
                <div className='branch-content'>
                  <img src={image1} alt='location icon' />
                  <p className='branch-desc'>{branch.desc}</p>
                  <a
                    className='branch-address'
                    href={`https://www.google.com/maps?q=${branch.lat},${branch.long}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{ color: '#1890ff', cursor: 'pointer' }}
                  >
                    {branch.address}
                  </a>
                  <p className='branch-phone'>
                    <img src={image2} alt='phone icon' />
                    {branch.phone}
                  </p>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Branches;
