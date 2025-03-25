import React from 'react';
import './About.css';
import image1 from '../../assets//Ellipse 22.png';
import { useTranslation, Trans } from 'react-i18next';

function About({ siteData }) {
  const { t } = useTranslation();
  return (
    <section className='about'>
      <div className='container'>
        <div className='about-content'>
          <div className='about-left'>
            <img src={image1} alt='image' />
          </div>
          <div className='about-right'>
            <h2 className='about-title'>
              <Trans
                i18nKey='aboutTitle'
                components={{
                  span: <span />,
                }}
              />
            </h2>
            <p className='about-desc'>{siteData.value}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
