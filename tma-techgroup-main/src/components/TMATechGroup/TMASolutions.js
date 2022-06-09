import React from 'react';
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import data from '../../config/config';

function TMASolutions(props) {
    const {t} = useTranslation()
    const dataTMASolutionLeft = [
        {
            id: 1,
            title: "E-commerce, Retail, Distribution",
            engineers: data.engineerEcommerce
        },
        {
            id: 2,
            title: "Telecom/5G IoT/Automotive",
            engineers: data.engineerTelecom
        },
        {
            id: 3,
            title: "Data Analytics & AI/ML",
            engineers: data.engineerDataAnalytics
        },
        {
            id: 4,
            title: "IoT & Robotics",
            engineers: data.engineerIOT
        },
        {
            id: 5,
            title: "Application Development",
            engineers: data.engineerApplication
        }
    ]
    const dataTMASolutionRight = [
        {
            id: 1,
            title: "Finance & Insurance",
            engineers: data.engineerFinance
        },
        {
            id: 2,
            title: "Healthcare",
            engineers: data.engineerHealthcare
        },
        {
            id: 3,
            title: "Testing Center",
            engineers: data.engineerTesting
        }
    ]
    return (
        <div className='d-flex'>
            <div className='col-5 padding-top-200 padding-left-0'>
                <div>
                    <Image src={require("../../assets/images/Logo/logo-tma-solution.webp")} alt="image" width="100px" height="46px"/>
                </div>
                <div className='title-tma-solution padding-top-20'>
                    TMA Solutions
                </div>
                <div className='title-tma-solution-span padding-top-12'>
                   <div>{t("Reliable.Technology.Innovation.Partner")}</div>  
                   <div> {t("for.Companies.Worldwide")}</div>
                </div>
            </div>
            <div className='d-flex col-7 padding-left-50 padding-top-32 padding-right-0'>
                <div className='col-6 padding-right-0 padding-left-0'>
                    {
                        dataTMASolutionLeft.map((item) => {
                            return (
                                <div key={item.id} className={item.id === 1 ? "" : "padding-top-12"} >
                                    <div className="tech-group-box">
                                        <div className='box-title'>{item.title}</div>
                                        <div className='box-number'>{item.engineers} {t("engineer")} </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='col-6 padding-right-0'>
                    <div>
                        <Image className='image-lab6' src={require("../../assets/images/TMATechGroup/image-tma-lab6.webp")} alt="image" height="190px"/>
                    </div>
                    <div>
                        {
                            dataTMASolutionRight.map((item) => {
                                return (
                                    <div key={item.id} className="padding-top-12" >
                                        <div className="tech-group-box">
                                            <div className='box-title'>{item.title}</div>
                                            <div className='box-number'>{item.engineers} {t("engineer")} </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TMASolutions;