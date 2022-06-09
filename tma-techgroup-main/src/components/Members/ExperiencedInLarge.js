import React from 'react'
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../../assets/sass/experiencedInLarge.scss"

function ExperiencedInLarge() {
    const language = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const { t } = useTranslation();
    return (
        <div className="d-flex experienced-in-large">
            <div className="experienced-in-large-content col-lg-6 col-xs-12">
                <div className="members-two-title">
                    <div>Experienced in</div>
                    <div>Large & Complex Projects</div>
                </div>
                <div className="members-two-box d-flex">
                    <div className="col-6 col-box-left">
                    <Image className="image-members-4" src={require("../../assets/images/Members/image-experienced-1.webp")} alt="image"/>
                    </div>
                    <div className="col-6 col-box-right">
                    <Image className="image-members-5" src={require("../../assets/images/Members/image-experienced-5.webp")} alt="image"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xs-12 experienced-in-large-right">
                <div className="members-us-img">
                    <div className="about-us-backroud-frame"><img src={require("../../assets/images/AboutUs/backgroud-frame.webp")} alt="image" /></div>
                    <div className="d-flex">
                        <div className="image-members-1-top">
                            <div className="d-flex">
                                <div className="col-xl-7 image-1">
                                    <Image className="image-members-1" src={require("../../assets/images/Members/image-experienced-4.webp")} alt="image"/>
                                </div>
                                <div className="col-xl-5 image-2">
                                    <Image className="image-members-2" src={require("../../assets/images/Members/image-experienced-2.webp")} alt="image"/>
                                </div>
                            </div>
                            <div className="col-xl-12 image-bottom">
                                <Image className="image-members-3" src={require("../../assets/images/Members/image-experienced-3.webp")} alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperiencedInLarge
