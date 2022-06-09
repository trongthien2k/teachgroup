import React, {useState, useEffect} from "react";
import { Image, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ChangeLanguage from "../components/ChangeLanguage";
import "../assets/sass/header.scss";
// import useLocation from '../hooks/useLocation';

const RenderMenu = (props) => {
    const i18nextLng = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const { t } = useTranslation();
    const Location = useLocation();
    const statusActive = props.status
    const [handClickMenu, setHandClickMenu ] = useState(statusActive);
    // console.log(handClickMenu, 'handClickMenu')
    const url = props.url
    const activeURL = statusActive === undefined ? Location.pathname : url 
    // console.log(statusActive, 'statusActive')
    const handClick = () => {
        // console.log('====')
        // setHandClickMenu(undefined)
        // statusActive = undefined
    }
    const menu = [
        {
            id: 1,
            href: "/",
            label: t("home"),
        },
        {
            id: 2,
            href: "/about-us",
            label: t("about.us"),
        },
        {
            id: 3,
            href: "/history",
            label: t("menu.History"),
        },
        {
            id: 4,
            href: "/technologies",
            label: t("Technologies"),
        },
        {
            id: 5,
            href: "/solutions",
            label: t("Solutions"),
        },
        {
            id: 6,
            href: "/members",
            label: t("Members"),
        },
        {
            id: 7,
            href: "media-awards",
            label: t("menu.media.awards"),
        },
        
        {
            id: 8,
            href: "contact-us",
            label: t("menu.Contact"),
        },
    ];

    const menuVN = [
        {
            id: 1,
            href: "/",
            label: t("home"),
        },
        {
            id: 2,
            href: "/about-us",
            label: t("about.us"),
        },
        {
            id: 3,
            href: "/history",
            label: t("menu.History"),
        },
        {
            id: 4,
            href: "/technologies",
            label: t("Technologies"),
        },
        {
            id: 5,
            href: "/solutions",
            label: t("Solutions"),
        },
        {
            id: 6,
            href: "/members",
            label: t("Members"),
        },
        {
            id: 7,
            href: "industry",
            label: t("cooperative.university"),
        },
        {
            id: 8,
            href: "media-awards",
            label: t("menu.media.awards"),
        },
        
        {
            id: 9,
            href: "contact-us",
            label: t("menu.Contact"),
        },
    ];

    function scrolldiv(item) {
        var elem = document.getElementById(item);
        console.log(elem, 'elem')
        elem.scrollIntoView({
            block: "center",
            behavior: "smooth"
          });
    }
    if (i18nextLng === "en" || i18nextLng === "EN") {
        return menu.map((item) => {
            return (
                <Row key={item.id}>
                    <Col className="menu-tag-a">
                        <div className="padding-left-16 desktop-menu ">
                            <Link
                                to={item.href}
                                onClick={handClick}
                                className={`${activeURL === item.href ? "active-tab menu-tag-a" : "menu-tag-a"}`}
                            >
                                {item.label}
                            </Link>
                        </div>
                        <div className="padding-left-16 mobile-menu" onClick={() => scrolldiv(item.href)}>
                            <Link
                                to={item.href}
                                className="menu-tag-a"
                                // className={`${pathname === '/' ? "active" : ""}`}
                            >
                                {item.label}
                            </Link>
                        </div>
                    </Col>
                </Row>
            );
        });
    } else {
        return menuVN.map((item) => {
            return (
                <Row key={item.id}>
                    <Col className="menu-tag-a">
                        <div className="padding-left-16 desktop-menu">
                            <Link
                                to={item.href}
                                className={`${activeURL === item.href ? "active-tab menu-tag-a" : "menu-tag-a"}`}
                            >
                                {item.label}
                            </Link>
                        </div>
                        <div className="padding-left-16 mobile-menu" onClick={() => scrolldiv(item.href)}>
                            <Link
                                to={item.href}
                                className="menu-tag-a"
                                // className={`${pathname === '/' ? "active" : ""}`}
                            >
                                {item.label}
                            </Link>
                        </div>
                    </Col>
                </Row>
            );
        });
    }
};

const Header = (props) => {
    const [showNav, setShowNav] = useState(false);
    const { t } = useTranslation();
    window.onscroll = function () {
        scrollFunction();
    };
    function scrollFunction() {
        if (
            document.body.scrollTop > 5 ||
            document.documentElement.scrollTop > 5
        ) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "32px";
        }
    }
    const handleToggleBar = () => {
      setShowNav(!showNav);
    };
    const [lang, setLang] = useState(''),
    callbackFunctionLang = (lang) => {
        setLang(lang)
    }
    return (
        <div className={scrollFunction ? "menu-scroll" : ""} id="navbar">
            <ChangeLanguage Callback={callbackFunctionLang} />
            <div className="container-menu">
                <div className="d-flex menu padding-top-12 padding-bottom-20">
                    <div className="Logo col-1 padding-left-0 padding-right-0">
                        <a href="/">
                            <Image
                                src={require("../assets/images/Logo/logo-TMA.webp")}
                                alt="logo"
                                width="100px"
                                height="46px"
                            />
                            {/* <Image src={require("../assets/images/Logo/logoT-M-A.webp")} alt="hình ảnh" width="100px" height="46px"/> */}
                        </a>
                    </div>
                    <div className={`title-menu col-11 d-flex ${showNav ? "active" : ""}`}>
                        <RenderMenu url={props.dataUrl} status={props.status} />
                    </div>
                    <div
                        className="wrapper-menu__bar"
                        onClick={handleToggleBar}
                    >
                        <div className="wrapper-menu__bar__item"></div>
                        <div className="wrapper-menu__bar__item"></div>
                        <div className="wrapper-menu__bar__item"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
