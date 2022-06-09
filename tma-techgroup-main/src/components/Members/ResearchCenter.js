import React from 'react'
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../../assets/sass/researchCenter.scss"

function ResearchCenter() {
    const language = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const { t } = useTranslation();
    return (
        <div className="d-flex research-center">
            <div className="research-center-content col-lg-7 col-xs-12">
                <div className="research-center-title">
                    <div>Trung tâm nghiên cứu & </div>
                    <div>chuyển giao công nghệ R&D Center</div>
                </div>
                <div className="research-center-box d-flex">
                    <div className="col-6 box-col">
                        <div className="box-1">
                            <div className="box-backgroud box-text-1">
                                Nghiên cứu phát triển công nghệ 4.0 cho thị trường Việt Nam và thế giới
                            </div>
                        </div>
                        <div className="box-2">
                            <div className="box-backgroud box-text-2">
                                Thu hút các nhà khoa học trong và ngoài nước để
                                trở thành trung tâm nghiên cứu và triển khai CNTT
                                hàng đầu tại miền Trung
                            </div>
                        </div>
                    </div>
                    <div className="col-6 box-col">
                        <div className="box-3">
                            <div className="box-backgroud box-text-3">
                                Hợp tác R&D với các trường đại học miền trung
                                nhằm mục đích chuyển giao và ứng dụng CNTT và
                                các công nghệ mới vào công nghiệp, nông nghiệp,
                                sản xuất,…
                            </div>
                        </div>
                        <div className="box-4">
                            <div className="box-backgroud box-text-4">
                                Kết nối nghiên cứu khoa học - công nghệ với doanh
                                nghiệp để thúc đẩy ứng dụng – triển khai
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-xs-12 experienced-in-large-right">
                <div className="members-us-img">
                    <div className="about-us-backroud-frame"><img src={require("../../assets/images/AboutUs/backgroud-frame.webp")} alt="image" /></div>
                    <div className="d-flex">
                        <div className="image-members-1-top">
                            <div className="col-xl-12 image-top">
                                <Image  src={require("../../assets/images/Members/image-2-researchCenter.webp")} alt="image"/>
                            </div>
                            <div className="col-xl-12 image-bottom">
                                <Image  src={require("../../assets/images/Members/image-1-researchCenter.webp")} alt="image"/>
                            </div>
                            <div className="col-xl-12 image-bottom">
                                <Image  src={require("../../assets/images/Members/image-3-researchCenter.webp")} alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResearchCenter
