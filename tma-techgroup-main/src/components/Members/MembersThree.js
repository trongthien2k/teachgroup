import React from 'react';
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../../assets/sass/membersThree.scss";
import iconArrow from "../../assets/images/SolutionsServices/icon-arrow.webp"
import iconSolutionConsulting from "../../assets/images/SolutionsServices/icon-Solution-Consulting.webp"
import iconProductPlanning from "../../assets/images/SolutionsServices/icon-Product-Planning.webp"
import iconBusinessAnalysis from "../../assets/images/SolutionsServices/icon-Business-Analysis.webp"
import iconRD from "../../assets/images/SolutionsServices/icon-R-D.webp"
import iconTechnicalSolution from "../../assets/images/SolutionsServices/icon-Technical-Solution.webp"
import iconuiux from "../../assets/images/SolutionsServices/icon-ui-ux.webp"
import iconTesting from "../../assets/images/SolutionsServices/icon-testing.webp"
import iconPortingMigration from "../../assets/images/SolutionsServices/icon-Porting-Migration.webp"
import iconProductionSupport from "../../assets/images/SolutionsServices/icon-Production-Support.webp"
import iconITManagedServices from "../../assets/images/SolutionsServices/icon-IT-Managed-Services.webp"
import icondevelop from "../../assets/images/SolutionsServices/icon-develop.webp"


const MembersThree = () => {
  const { t } = useTranslation();
  return (
    <div className="members-three">
        <div className="members-three-backgroud">
            <div className="members-three-contain container">
                <div className="content-title">{t('Services.&.Solutions')}</div>
                <div className="members-three-content">
                    <div className='d-flex services-content'>
                        {/* <div className="icon-arrow1"><Image src={iconArrow} alt="image" height="32px" width="32px" /></div>
                        <div className="icon-arrow2"><Image src={iconArrow} alt="image" height="32px" width="32px" /></div>
                        <div className="icon-arrow3"><Image src={iconArrow} alt="image" height="32px" width="32px" /></div>
                        <div className="icon-arrow4"><Image src={iconArrow} alt="image" height="32px" width="32px" /></div> */}
                        <div className="service-group service-group-box-1 padding-left-0 col-xs-12 col-lg-2 padding-top-78 padding-right-0">
                            <div className="services-box">
                                <div className="padding-top-13"><Image src={iconSolutionConsulting} alt="image" height="42px" width="42px" /></div>
                                <div className='padding-right-20 padding-left-20 padding-top-8 services-box-text'>{t("product.planning")}</div>
                            </div>
                            <div className="padding-top-12">
                                <div className="services-box">
                                    <div className="padding-top-13"><Image src={iconProductPlanning} alt="image" height="42px" width="42px" /></div>
                                    <div className='padding-right-20 padding-left-20 padding-top-8 services-box-text'>{t("solution.consulting")} </div>
                                </div>
                            </div>
                            <div className="icon-arrow1"><Image src={iconArrow} alt="image" height="32px" width="32px" /></div>
                        </div>
                        <div className="service-group col-xs-12 col-lg-2 padding-top-78 padding-left-0 padding-right-0">
                            <div className="services-box">
                                <div className="padding-top-13"><Image src={iconBusinessAnalysis} alt="image" height="42px" width="42px" /></div>
                                <div className='padding-right-20 padding-left-20 padding-top-8 services-box-text'>{t("Business.Analysis")}</div>
                            </div>
                            <div className="padding-top-12">
                                <div className="services-box">
                                    <div className="padding-top-13"><Image src={iconRD} alt="image" height="42px" width="42px" /></div>
                                    <div className='padding-right-20 padding-left-20 padding-top-8 services-box-text'>R&D PoC Prototype</div>
                                </div>
                            </div>
                            <div className="icon-arrow2"><Image src={iconArrow} alt="image" height="32px" width="32px" /></div>
                        </div>
                        <div className="service-group col-xs-12 col-lg-2 padding-top-78 padding-left-0 padding-right-0">
                            <div className="services-box">
                                <div className="padding-top-13"><Image src={iconTechnicalSolution} alt="image" height="42px" width="42px" /></div>
                                <div className='padding-right-20 padding-left-20 padding-top-8 services-box-text'>{t("Technical.Solution")}</div>
                            </div>
                            <div className="padding-top-12">
                                <div className="services-box">
                                    <div className="padding-top-13"><Image src={iconuiux} alt="image" height="42px" width="42px" /></div>
                                    <div className='padding-right-20 padding-left-20 padding-top-8 services-box-text'>{t("UX.UI.Design")}</div>
                                </div>
                            </div>
                            <div className="icon-arrow3"><Image src={iconArrow} alt="image" height="32px" width="32px" /></div>
                        </div>
                        <div className="service-group service-group-3 col-xs-12 col-lg-2 padding-left-0 padding-right-0">
                            <div className="service-group-3-top">
                                <div className="services-box">
                                    <div className="padding-top-13"><Image src={icondevelop} alt="image" height="42px" width="42px" /></div>
                                    <div className='padding-right-20 padding-left-20 padding-top-8 services-box-text'>{t("Development")}</div>
                                </div>
                                <div className="padding-top-12">
                                    <div className="services-box">
                                        <div className="padding-top-13"><Image src={iconTesting} alt="image" height="42px" width="42px" /></div>
                                        <div className='padding-right-20 padding-left-20 padding-top-8 services-box-text'>{t("Testing")}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top-12">
                                <div className="services-box">
                                    <div className="padding-top-13"><Image src={iconPortingMigration} alt="image" height="42px" width="42" /></div>
                                    <div className='padding-right-20 padding-left-20 padding-top-8 services-box-text'>{t("Porting.Migration")}</div>
                                </div>
                            </div>
                            <div className="icon-arrow4"><Image src={iconArrow} alt="image" height="32px" width="32px" /></div>
                        </div>
                        <div className="service-group col-xs-12 col-lg-2 padding-top-78 padding-left-0 padding-right-0">
                            <div className="services-box">
                                <div className="padding-top-13"><Image src={iconProductionSupport} alt="image" height="42px" width="42px" /></div>
                                <div className='padding-right-20 padding-left-20 padding-top-8 services-box-text'>{t("Production.Support")}</div>
                            </div>
                            <div className="padding-top-12">
                                <div className="services-box">
                                    <div className="padding-top-13"><Image src={iconITManagedServices} alt="image" height="42px" width="42px" /></div>
                                    <div className='padding-right-20 padding-left-20 padding-top-8 services-box-text'>{t("IT.Managed.Services")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MembersThree;
