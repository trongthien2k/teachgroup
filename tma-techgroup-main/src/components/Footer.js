import React from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../assets/sass/footer.scss"

const RenderMenu = () => {
    const {t} = useTranslation()
    const menu = [
      {
        id: 1,
        href: "technology",
        label: t("menu.technology"),
      },
      {
        id: 2,
        href: "about-us",
        label: t("about.us"),
      },
      {
        id: 3,
        href: "contact-us",
        label: t("menu.Contact"),
      },
    ];
      const handleNavigate = (e, item) => {
        e.preventDefault();
        // window.location.assign(`/${item.href}`);
        var element = document.getElementById(item.href); 
        window.scroll({
          top: parseInt(element.offsetTop), 
          left: parseInt(element.offsetLeft), 
          behavior: 'smooth'
        });
      };
    
      return menu.map((item) => {
        return (
          <li key={item.id} className="menu-footer-contain">
            <div className="menu-footer-contain-div">
              <a
                href={`${item.href}`}
                className="menu-tag-a"
                onClick={(e) => handleNavigate(e, item)}
              >
                {item.label}
              </a>
            </div>
          </li>
        );
      });
    };

const Footer = () => {
  const { t } = useTranslation();
  let date =  new Date().getFullYear();
  const styleWidth = document.body.clientWidth;
  return (
    <div className="footer-contain">
        <div className="footer-contain-content">
          <div className="footer-contain-content-nav container">
              <div className="col-lg-3 col-sm-12 footer-content-logo padding-left-0">
                  <Image src={require("../assets/images/Footer/logo-tma-solutions.webp")} className="logo-tma-footer" alt="image"/>
              </div>
              <div className="col-lg-9 col-sm-12 footer-content padding-right-0">
                  <RenderMenu />
              </div>
          </div>
        </div>
        <div className="footer-tma-solutions">
          <div className="container footer-tma-solutions-nav">
              <div className="col-lg-9 col-sm-12 footer-tma-contten padding-left-0">TMA Solutions © {date} All Rights Reserved</div>
              <div className="d-flex col-lg-3 col-sm-12 footer-tma-image padding-right-0">
                  <div className="footer-tma-image-in">
                      <Image className="footer-tma-image-footer" src={require("../assets/images/Footer/icon-footer-in.webp")} alt="image" />
                  </div>
                  <div>
                      <Image className="footer-tma-image-footer" src={require("../assets/images/Footer/icon-footer-youtobe.webp")} alt="image" />
                  </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
