import React from 'react';
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import data from '../../config/config';

function TMABinhDinh(props) {
    const {t} = useTranslation()
    const dataTMASolutionLeft = [
        {
            id: 1,
            title: "2021",
            engineers: data.engineerEcommerce
        },
        {
            id: 2,
            title: t("Software.Center"),
        },
        {
            id: 3,
            title: t("R.D.Center"),
        }
    ]
    const dataTMASolutionRight = [
        {
            id: 1,
            title: "2025",
            engineers: data.engineerFinance
        },
        {
            id: 2,
            title: t("Data.Science.Lab"),
        },
        {
            id: 3,
            title: "Tech Academy",
        }
    ]
    return (
        <div className='d-flex padding-top-74'>
            <div className='col-5 padding-top-200 padding-left-0'>
                <div>
                    <Image src={require("../../assets/images/Logo/logo-tma-binh-dinh.webp")} alt="image" width="100px" height="68px"/>
                </div>
                <div className='title-tma-solution-bd padding-top-20'>
                    {t("TMA.Solutions.Binh.Dinh")}
                </div>
                <div className='title-tma-solution-span-bd padding-top-12'>
                   <div>{t("Leading.technology.center.in")}</div>  
                   <div>{t("central.Vietnam")}</div>
                </div>
            </div>
            <div className='col-7 padding-left-50 padding-top-64 padding-right-0'>
                <div>
                    <Image className='image-lab6-bd' src={require("../../assets/images/TMATechGroup/image-tma-lab8.webp")} alt="image" height="190px"/>
                </div>
                <div className='d-flex ' >
                    <div className='col-6 padding-right-0 padding-left-0'>
                        {
                            dataTMASolutionLeft.map((item) => {
                                return (
                                    <div key={item.id} className="padding-top-12" >
                                        <div className="tech-group-box-bd">
                                            {item.id === 1 ? 
                                                <div className='box-title-bd'>{item.title}</div> 
                                                : <div className='box-title-bd padding-top-12'>{item.title}</div>
                                            }
                                            
                                            {item.id === 1 ? 
                                                <div className='box-number-bd'>{item.engineers} {t("engineer")} </div>
                                                : ""
                                            }
                                            
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='col-6 padding-right-0'>
                        <div>
                            {
                                dataTMASolutionRight.map((item) => {
                                    return (
                                        <div key={item.id} className="padding-top-12" >
                                            <div className="tech-group-box-bd">
                                                {item.id === 1 ? 
                                                    <div className='box-title-bd'>{item.title}</div> 
                                                    : <div className='box-title-bd padding-top-12'>{item.title}</div>
                                                }
                                                
                                                {item.id === 1 ? 
                                                    <div className='box-number-bd'>{item.engineers} {t("engineer")} </div>
                                                    : ""
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TMABinhDinh;