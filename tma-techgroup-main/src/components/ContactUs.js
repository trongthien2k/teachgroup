import React from 'react';
import { Image } from "react-bootstrap";
import "../assets/sass/contactUs.scss"
import { useTranslation } from "react-i18next";
import background from "../assets/images/ContactUs/backgroud-contact-us.webp"
import line from "../assets/images/ContactUs/line.webp"
import phone from "../assets/images/ContactUs/icon-phone.webp"
import IconEmail from "../assets/images/ContactUs/icon-mail.webp"
import IconWebsite from "../assets/images/ContactUs/icon-website.webp"

function ContactUs(props) {
    const { t } = useTranslation();
    const styleWidth = document.body.clientWidth;
    return (
        <div className="contact-us-contain" id="contact-us">
            <div className="container">
                <div className="contact-us-content">
                    <div className="contact-us-title">{t("contact.us")}</div>
                    <div className="contact-us-contact">
                        <div className="contact-us-contact-background contact-us-contact-background-d-flex backgroud-image">
                            <div className='col-lg-7 col-sm-12 padding-right-0 contact-us-contact-phone-nav'>
                                <div className="contact-us-contact-phone">
                                    <div className="col-lg-6 col-sm-6 col-xs-12 contact-phone-left">
                                        <div>
                                            <div className='contruy-name'>{t("viet.nam")}<Image className="padding-left-4" src={line} width="20px" height="2px"/></div>
                                            <div className='number-phone'><a className='text-decoration' style={{color: "#222222"}} href="tel:+842839978000">+84 28 3997 8000</a></div>
                                        </div>
                                        <div className='padding-top-item'>
                                            <div className='contruy-name'>{t("North.America")}<Image className="padding-left-4" src={line} width="20px" height="2px"/></div>
                                            <div className='number-phone'><a className='text-decoration' style={{color: "#222222"}} href="tel:+18442244188">+1 844 224 4188</a></div>
                                        </div>
                                        <div className='padding-top-item'>
                                            <div className='contruy-name'>{t("Europe")}<Image className="padding-left-4" src={line} width="20px" height="2px"/></div>
                                            <div className='number-phone'><a className='text-decoration' style={{color: "#222222"}} href="tel:+491716173356">+49 171 617 3356</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-xs-12 contact-phone-right">
                                        <div>
                                            <div className='contruy-name'>{t("Australia")}<Image className="padding-left-4" src={line} width="20px" height="2px"/></div>
                                            <div className='number-phone'><a className='text-decoration' style={{color: "#222222"}} href="tel:+61478407408">+61 478 407 408</a></div>
                                        </div>
                                        <div className='padding-top-item'>
                                            <div className='contruy-name'>{t("Japan")}<Image className="padding-left-4" src={line} width="20px" height="2px"/></div>
                                            <div className='number-phone'><a className='text-decoration' style={{color: "#222222"}} href="tel:+81364324994">+81 364 324 994</a></div>
                                        </div>
                                        <div className="icon-phone">
                                            <Image src={phone} className="icon-phone-img" width="189px" height="189px"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12 col-phone-contact">
                                <div className="d-flex padding-top-16 ">
                                    <div className="padding-right-0 padding-left-0 padding-top-30 col-2 icon-email">
                                        <Image src={IconEmail} width="64px" height="64px"/>
                                    </div>
                                    <div className="col-10 padding-left-17">
                                        <span className='title-email'>Email</span>
                                        <div className='padding-top-12 content-email'>
                                            <div><a href="mailto:sales@tmasolutions.vn" className='text-decoration' style={{color: "#FFFFFF"}}>sales@tmasolutions.vn</a></div>
                                            <div><a href="mailto:contact@tma-binhdinh.vn" className='text-decoration' style={{color: "#FFFFFF"}}>contact@tma-binhdinh.vn</a></div>
                                            <div><a href="mailto:contact@tmainnovation.vn" className='text-decoration' style={{color: "#FFFFFF"}}>contact@tmainnovation.vn</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex padding-top-48'>
                                    <div className="padding-right-0 padding-left-0 padding-top-30 col-2 icon-website">
                                        <Image src={IconWebsite} width="64px" height="64px"/>
                                    </div>
                                    <div className="col-10 padding-left-17">
                                        <span className='title-email'>Website</span>
                                        <div className='padding-top-12 content-email'>
                                            <div><a href="https://www.tmasolutions.vn/" className='text-decoration' style={{color: "#FFFFFF"}}>www.tmasolutions.vn</a></div>
                                            <div><a href="https://www.tma-binhdinh.vn/" className='text-decoration' style={{color: "#FFFFFF"}}>www.tma-binhdinh.vn</a></div>
                                            <div><a href="https://www.tmainnovation.vn/" className='text-decoration' style={{color: "#FFFFFF"}}>www.tmainnovation.vn</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;