import React from 'react';
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import background from "../assets/images/SolutionsServices/backgound.webp"
import "../assets/sass/solutionsServices.scss"
// image 
import iconArrow from "../assets/images/SolutionsServices/icon-arrow.webp"
import imageSolutionsServices1 from "../assets/images/SolutionsServices/image-solutions-services-1.webp"
import imageSolutionsServices2 from "../assets/images/SolutionsServices/image-solutions-services-2.webp"
import iconSolutionConsulting from "../assets/images/SolutionsServices/icon-Solution-Consulting.webp"
import iconProductPlanning from "../assets/images/SolutionsServices/icon-Product-Planning.webp"
import iconBusinessAnalysis from "../assets/images/SolutionsServices/icon-Business-Analysis.webp"
import iconRD from "../assets/images/SolutionsServices/icon-R-D.webp"
import iconTechnicalSolution from "../assets/images/SolutionsServices/icon-Technical-Solution.webp"
import iconuiux from "../assets/images/SolutionsServices/icon-ui-ux.webp"
import iconTesting from "../assets/images/SolutionsServices/icon-testing.webp"
import iconPortingMigration from "../assets/images/SolutionsServices/icon-Porting-Migration.webp"
import iconProductionSupport from "../assets/images/SolutionsServices/icon-Production-Support.webp"
import iconITManagedServices from "../assets/images/SolutionsServices/icon-IT-Managed-Services.webp"
import icondevelop from "../assets/images/SolutionsServices/icon-develop.webp"
import iconGoAutomation from "../assets/images/SolutionsServices/icon-Go-Automation.webp"
import iconGoSmart from "../assets/images/SolutionsServices/icon-Go-Smart.webp"
import iconGoDigital from "../assets/images/SolutionsServices/icon-Go-Digital.webp"
import iconGoInnovative from "../assets/images/SolutionsServices/icon-Go-Innovative.webp"
import iconGoMobile from "../assets/images/SolutionsServices/icon-Go-Mobile.webp"
import iconGoInteractive from "../assets/images/SolutionsServices/icon-Go-Interactive.webp"
import iconGoOnline from "../assets/images/SolutionsServices/icon-Go-Online.webp"
import iconGoCloud from "../assets/images/SolutionsServices/icon-Go-Cloud.webp"


const SolutionsServices = () => {
  const { t } = useTranslation();
  return (
    <div id="solutions-services">
        <div className="solutionsServices-contain container">
            <div className="solution-title-contain">
                <div>{t("Solutions.Services")}</div>
            </div>
            <div className="solution-content-contain" > 
                <div className='bg-service-solution' style={{ backgroundImage: `url(${background})`, height: "1149px" }}>
                    <div className="d-flex padding-left-64 padding-right-60 image-contain">
                        <div className='col-8 image-content padding-left-0'>
                            <Image src={imageSolutionsServices1} alt="image" height="353px" width="100%" />
                        </div>
                        <div className='col-4 image-content padding-right-0'>
                            <Image src={imageSolutionsServices2} alt="image" height="353px" width="100%" />
                        </div>
                    </div>
                    <div className="services padding-left-64 padding-right-60">
                        <div className="d-flex services-title "> 
                            <div className="col-lg-2 col-xs-4 services-title-left padding-left-0">{t("Services")}</div>
                            <div className="col-lg-10 col-xs-8 services-title-hr-nav"><div className="services-title-hr"/></div>
                        </div>
                        <div className='d-flex services-content'>
                            <div className="icon-arrow1"><Image src={iconArrow} alt="image" height="32px" width="32px" /></div>
                            <div className="icon-arrow2"><Image src={iconArrow} alt="image" height="32px" width="32px" /></div>
                            <div className="icon-arrow3"><Image src={iconArrow} alt="image" height="32px" width="32px" /></div>
                            <div className="icon-arrow4"><Image src={iconArrow} alt="image" height="32px" width="32px" /></div>
                            <div className="service-group padding-left-0 col-xs-12 col-lg-2 padding-top-78 padding-right-0">
                                <div className="services-box">
                                    <div className="padding-top-13"><Image src={iconSolutionConsulting} alt="image" height="42px" width="42px" /></div>
                                    <div className='padding-right-20 padding-left-20 padding-top-8'>{t("solution.consulting")}</div>
                                </div>
                                <div className="padding-top-12">
                                    <div className="services-box">
                                        <div className="padding-top-13"><Image src={iconProductPlanning} alt="image" height="42px" width="42px" /></div>
                                        <div className='padding-right-20 padding-left-20 padding-top-8'>{t("product.planning")}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-group col-xs-12 col-lg-2 padding-top-78 padding-left-0 padding-right-0 margin-left-48">
                                <div className="services-box">
                                    <div className="padding-top-13"><Image src={iconBusinessAnalysis} alt="image" height="42px" width="42px" /></div>
                                    <div className='padding-right-20 padding-left-20 padding-top-8'>{t("Business.Analysis")}</div>
                                </div>
                                <div className="padding-top-12">
                                    <div className="services-box">
                                        <div className="padding-top-13"><Image src={iconRD} alt="image" height="42px" width="42px" /></div>
                                        <div className='padding-right-20 padding-left-20 padding-top-8'>R&D</div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-group col-xs-12 col-lg-2 margin-left-48 padding-top-78 padding-left-0 padding-right-0">
                                <div className="services-box">
                                    <div className="padding-top-13"><Image src={iconTechnicalSolution} alt="image" height="42px" width="42px" /></div>
                                    <div className='padding-right-20 padding-left-20 padding-top-8'>{t("Technical.Solution")}</div>
                                </div>
                                <div className="padding-top-12">
                                    <div className="services-box">
                                        <div className="padding-top-13"><Image src={iconuiux} alt="image" height="42px" width="42px" /></div>
                                        <div className='padding-right-20 padding-left-20 padding-top-8'>{t("UX.UI.Design")}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-group service-group-3 col-xs-12 col-lg-2 margin-left-48 padding-left-0 padding-right-0">
                                <div className="service-group-3-top">
                                    <div className="services-box">
                                        <div className="padding-top-13"><Image src={icondevelop} alt="image" height="42px" width="42px" /></div>
                                        <div className='padding-right-20 padding-left-20 padding-top-8'>{t("Development")}</div>
                                    </div>
                                    <div className="padding-top-12">
                                        <div className="services-box">
                                            <div className="padding-top-13"><Image src={iconTesting} alt="image" height="42px" width="42px" /></div>
                                            <div className='padding-right-20 padding-left-20 padding-top-8'>{t("Testing")}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="padding-top-12">
                                    <div className="services-box">
                                        <div className="padding-top-13"><Image src={iconPortingMigration} alt="image" height="42px" width="42" /></div>
                                        <div className='padding-right-20 padding-left-20 padding-top-8'>{t("Porting.Migration")}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-group col-xs-12 col-lg-2 margin-left-48 padding-top-78 padding-left-0 padding-right-0">
                                <div className="services-box">
                                    <div className="padding-top-13"><Image src={iconProductionSupport} alt="image" height="42px" width="42px" /></div>
                                    <div className='padding-right-20 padding-left-20 padding-top-8'>{t("Production.Support")}</div>
                                </div>
                                <div className="padding-top-12">
                                    <div className="services-box">
                                        <div className="padding-top-13"><Image src={iconITManagedServices} alt="image" height="42px" width="42px" /></div>
                                        <div className='padding-right-20 padding-left-20 padding-top-8'>{t("IT.Managed.Services")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services solutions padding-left-64 padding-right-60 padding-top-48">
                        <div className="d-flex services-title"> 
                            <div className="col-xs-8 col-lg-2 padding-left-0">{t("Solutions")}</div>
                            <div className="col-xs-4 col-lg-10 services-title-hr-nav"><div className="services-title-hr"/></div>
                        </div>
                        <div className="Solutions-title-hr-nav-1"><div className="Solutions-title-hr"/></div>
                        <div className="Solutions-title-hr-nav-2"><div className="Solutions-title-hr"/></div>
                        <div className="Solutions-title-hr-nav-3"><div className="Solutions-title-hr"/></div>
                        <div className="Solutions-title-hr-nav-4"><div className="Solutions-title-hr"/></div>
                        <div className="Solutions-title-hr-nav-5"><div className="Solutions-title-hr"/></div>
                        <div className="Solutions-title-hr-nav-6"><div className="Solutions-title-hr"/></div>
                        <div className="Solutions-title-hr-left-1"><div className="Solutions-title-hr-left"/></div>
                        <div className="Solutions-title-hr-left-2"><div className="Solutions-title-hr-left"/></div>
                        <div className="rectangle"></div>
                        <div className='solutions-content d-flex'>
                            <div className="solutions-group sgroup-row1 d-flex row">
                                <div className="sgroup d-flex col-xs-12 col-lg-6 padding-top-32">
                                    <div className="col-6 Solutions-box">
                                        <div className="padding-top-30"><Image src={iconGoAutomation} alt="image" height="42px" width="42px" /></div>
                                        <div className='solution-box-title padding-right-20 padding-left-20 padding-top-12'>{t("Go Automation")}</div>
                                    </div>
                                    <div className="col-6 Solutions-box">
                                        <div className="padding-top-30"><Image src={iconGoDigital} alt="image" height="42px" width="42px" /></div>
                                        <div className='solution-box-title padding-right-20 padding-left-20 padding-top-12'>{t("Go Digital")}</div>
                                    </div>
                                </div>
                                <div className="sgroup d-flex col-xs-12 col-lg-6 padding-top-32">
                                    <div className="col-6 Solutions-box">
                                        <div className="padding-top-30"><Image src={iconGoMobile} alt="image" height="42px" width="42px" /></div>
                                        <div className='solution-box-title padding-right-20 padding-left-20 padding-top-12'>{t("Go Mobile")}</div>
                                    </div>
                                    <div className="col-6 Solutions-box">
                                        <div className="padding-top-30"><Image src={iconGoOnline} alt="image" height="42px" width="42px" /></div>
                                        <div className='solution-box-title adding-right-20 padding-left-20 padding-top-12'>{t("Go Online")}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="solutions-group sgroup-row2 d-flex row">
                                <div className="sgroup d-flex col-xs-12 col-lg-6 padding-top-32">
                                    <div className="col-6 Solutions-box">
                                        <div className="padding-top-30"><Image src={iconGoSmart} alt="image" height="42px" width="42px" /></div>
                                        <div className='solution-box-title padding-right-20 padding-left-20 padding-top-12'>{t("Go Smart")}</div>
                                    </div>
                                    <div className="col-6 Solutions-box">
                                        <div className="padding-top-30"><Image src={iconGoInnovative} alt="image" height="42px" width="42px" /></div>
                                        <div className='solution-box-title padding-right-20 padding-left-20 padding-top-12'>{t("Go Innovative")}</div>
                                    </div>
                                </div>
                                <div className="sgroup d-flex col-xs-12 col-lg-6 padding-top-32">
                                    <div className="col-6 Solutions-box">
                                        <div className="padding-top-30"><Image src={iconGoInteractive} alt="image" height="42px" width="42px" /></div>
                                        <div className='solution-box-title padding-right-20 padding-left-20 padding-top-12'>{t("Go Interactive")}</div>
                                    </div>
                                    <div className="col-6 Solutions-box">
                                        <div className="padding-top-30"><Image src={iconGoCloud} alt="image" height="42px" width="42px" /></div>
                                        <div className='solution-box-title padding-right-20 padding-left-20 padding-top-12'>{t("Go Cloud")}</div>
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
};

export default SolutionsServices;
