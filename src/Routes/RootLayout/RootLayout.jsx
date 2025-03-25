import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
// import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useTranslation } from "react-i18next";
import "./RootLayout.css";

function RootLayout() {
  const { t } = useTranslation();

  return (
    <section>
      <Navbar />
      <Outlet />
      {/* <FloatingWhatsApp
        phoneNumber="201234567890"
        accountName={t("client")}
        chatMessage={t("help")}
        avatar="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        statusMessage={t("active")}
      /> */}
      <Footer />
    </section>
  );
}

export default RootLayout;
