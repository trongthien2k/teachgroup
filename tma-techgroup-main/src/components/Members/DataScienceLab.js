import React from 'react'
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../../assets/sass/dataScienceLab.scss"

function DataScienceLab() {
    const language = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const { t } = useTranslation();
    return (
        <div className="d-flex data-science-lab">
            <div className="research-center-content col-lg-6 col-xs-12">
                <div className="research-center-title">
                    <div>Trung tâm khoa học dữ liệu – </div>
                    <div>Data Science Lab</div>
                </div>
                <div className="research-center-box d-flex">
                    <div className="box-col">
                        <div className="box-1">
                            <div className="box-backgroud box-text-1">
                            Nghiên cứu ứng dụng công nghệ khoa học dữ liệu
                            và trí tuệ nhân tạo trong các lĩnh vực
                            </div>
                        </div>
                        <div className="box-2">
                            <div className="box-backgroud box-text-2">
                            Hợp tác đào tạo nhân lực, khoa học dữ liệu và trí tuệ nhân tạo
                            (thực tập, hướng dẫn đề tài, đại hoc và sau đại học)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xs-12 experienced-in-large-right">
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

export default DataScienceLab
