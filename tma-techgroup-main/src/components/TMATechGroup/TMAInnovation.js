import React from 'react';
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import data from '../../config/config';

function TMAInnovation(props) {
    const {t} = useTranslation()
    return (
        <div className='d-flex padding-top-74'>
            <div className='col-5 padding-top-200 padding-left-0'>
                <div>
                    <Image src={require("../../assets/images/Logo/logo-tma-binh-dinh.webp")} alt="image" width="100px" height="68px"/>
                </div>
                <div className='title-tma-solution-inno padding-top-20'>
                    TMA Innovation
                </div>
                <div className='title-tma-solution-span-inno padding-top-12'>
                   <div>{t("Innovative.tech.products.and.solutions")}</div>  
                   <div>{t("for.various.industries")}</div>
                </div>
            </div>
            <div className='col-7 padding-left-50 padding-top-143 padding-right-0'>
                <div className='d-flex ' >
                    <div className='col-4 padding-left-0 padding-right-0'>
                        <div className='box-inno'>
                        <div>
                                <Image src={require("../../assets/images/TMATechGroup/image-Corporate-incubator.webp")} alt="image" width="100%" height="155px"/>
                        </div>
                        <div className='title-inno'>
                                {t("Corporate.incubator")}
                        </div>
                        <div className='content-inno-remote d-flex'> 
                            <div className='icon-circle'>●</div>
                            <div>{t("Remote.Health.Monitoring")}</div>
                            </div>
                            <div className='content-inno-remote d-flex'> 
                            <div className='icon-circle'>●</div>
                            <div>{t("Access.Control")}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-4 padding-right-0'>
                        <div className='box-inno'>
                        <div>
                                <Image src={require("../../assets/images/TMATechGroup/image-Tech-products-solutions.webp")} alt="image" width="100%" height="155px"/>
                        </div>
                        <div className='title-inno'>
                                {t("Tech.products.and.solutions")}
                        </div>
                        <div className='content-inno-remote d-flex'> 
                            <div className='icon-circle'>●</div>
                            <div>{t("Smart.Camera")}</div>
                            </div>
                            <div className='content-inno-remote d-flex'> 
                            <div className='icon-circle'>●</div>
                            <div>{t("Machine.Optimization")}</div>
                            </div>
                        </div>
                    </div>

                    <div className='col-4 padding-right-0'>
                        <div className='box-inno'>
                        <div>
                                <Image src={require("../../assets/images/TMATechGroup/image-R-D.webp")} alt="image" width="100%" height="155px"/>
                        </div>
                        <div className='title-inno-R-D'>
                                {(t("R.D"))}
                        </div>
                        <div className='content-inno-remote d-flex'> 
                            <div className='icon-circle'>●</div>
                            <div>{t("Container.Environment.Monitoring")}</div>
                            </div>
                            <div className='content-inno-remote d-flex'> 
                            <div className='icon-circle'>●</div>
                            <div>{t("Bus.Tracking")}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TMAInnovation;