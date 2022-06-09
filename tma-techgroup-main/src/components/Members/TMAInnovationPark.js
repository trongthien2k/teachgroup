import React from 'react'
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../../assets/sass/TMAInnovationPark.scss";

function TMAInnovationPark() {
    const language = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const { t } = useTranslation();
    return (
        <div className="TMA-innovation-park">
            <div className="TMA-innovation-park-backgroud">
                <div className="TMA-innovation-park-contain container">
                    {
                        language === "EN" || language === "en" ? 
                        <div className="title">
                            TMA Innovation Park
                        </div>
                        : 
                        <div className="title-VN">
                            Trung tâm Công nghệ hàng đầu
                            tại Miền Trung
                        </div>
                    }
                    {
                        language === "EN" || language === "en" ? 
                        <div className="title-span">
                            International working environment
                        </div>
                        : 
                        ""
                    }
                    <div className={`content ${ language === "EN" || language === "en" ?  "" : "none"} `}>
                        <div className="d-flex">
                            <div className="d-flex content-letf">
                                <div className='content-icon'>
                                    <img src={require("../../assets/images/Members/icon-software-outsourcing-enterprises.webp")} alt="image" />
                                </div>
                                <div className="contain-content">
                                    <div className="content-text">Location for</div>
                                    <div className="content-title">Software Centers</div>
                                </div>
                            </div>
                            <div className="d-flex content-betwen">
                                <div className='content-icon'>
                                    <img src={require("../../assets/images/Members/icon-AI-IoT.webp")} alt="image" />
                                </div>
                                <div className="contain-content">
                                    <div className="content-text">R&D Centers for</div>
                                    <div className="content-title">High Tech Products</div>
                                </div>
                            </div>
                            <div className="d-flex content-right">
                                <div className='content-icon'>
                                    <img src={require("../../assets/images/Members/icon-fintech.webp")} alt="image" />
                                </div>
                                <div className="contain-content">
                                    <div className="content-text">Attracting Talents in</div>
                                    <div className="content-title"> Central Vietnam</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`content-VN ${ language === "VI" || language === "vi" ?  "" : "none"} `}>
                        <div className="d-flex">
                            <div className='col-xl-4 box-col-1'>
                                <div className="box-backgroud box-1">
                                    <div className="box-text">
                                        Nơi đặt các trung tâm
                                        phần mềm – R&D của các
                                        công ty công nghệ trong
                                        và ngoài nước
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 box-col-2'>
                                <div className="box-backgroud box-2">
                                    <div className="box-text">
                                    Các trung tâm nghiên cứu
                                    và thiết kế sản phẩm
                                    “Made in Vietnam”
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 box-col-3'>
                                <div className="box-backgroud">
                                    <div className="box-text">
                                    Hội tụ nhân tài trong và
                                    ngoài nước
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={ language === "EN" || language === "en" ?  "image" : "image-VN" }>
                        <div className="d-flex">
                            <div className="col-xl-4 image-col-1">
                                <img className="image-inno-park" src={require("../../assets/images/Members/image-1-TMAInnovationPark.webp")} alt="image" />
                            </div>
                            <div className="col-xl-4 image-col-2">
                                <img className="image-inno-park" src={require("../../assets/images/Members/image-2-TMAInnovationPark.webp")} alt="image" />
                            </div>
                            <div className="col-xl-4 image-col-3">
                                <img className="image-inno-park" src={require("../../assets/images/Members/image-3-TMAInnovationPark.webp")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TMAInnovationPark
