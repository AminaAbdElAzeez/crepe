import React from "react";
import image1 from "../../assets/Rectangle 28.png";
import image2 from "../../assets/Rectangle 31.png";
import image3 from "../../assets/Rectangle 32.png";
import image4 from "../../assets/Rectangle 33.png";
import styles from "./Menus.module.css";
import { Card, Image } from "antd";

function Menus() {
  return (
    <section className={styles.menus}>
      <div className={styles.container}>
        <h5 className={styles.menusSubTitle}>Special Dishes</h5>
        <h3 className={styles.menusTitle}>CREB & WAFFLE Menus</h3>
        <div className={styles.menusContent}>
          <div className={styles.menusCard}>
            <Image alt="image" src={image1} className={styles.menusImg} />

            <h4 className={styles.menusItemTitle}>MENU CAIRO</h4>
            <div className={styles.line}></div>
          </div>
          <div className={styles.menusCard}>
            <Image alt="image" src={image2} className={styles.menusImg} />

            <h4 className={styles.menusItemTitle}>MENU Zagazig</h4>
            <div className={styles.line}></div>
          </div>
          <div className={styles.menusCard}>
            <Image alt="image" src={image3} className={styles.menusImg} />
            <h4 className={styles.menusItemTitle}>MENU Tanta</h4>
            <div className={styles.line}></div>
          </div>
          <div className={styles.menusCard}>
            <Image alt="image" src={image4} className={styles.menusImg} />

            <h4 className={styles.menusItemTitle}>MENU almahala</h4>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menus;
