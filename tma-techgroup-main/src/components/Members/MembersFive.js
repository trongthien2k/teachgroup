import React from 'react'
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import iconSolutionConsulting from "../../assets/images/SolutionsServices/icon-Go-Automation.webp"
import iconGoDigital from "../../assets/images/SolutionsServices/icon-Go-Digital.webp"
import iconGoInnovative from "../../assets/images/SolutionsServices/icon-Go-Innovative.webp"
import iconGoMobile from "../../assets/images/SolutionsServices/icon-Go-Mobile.webp"
import iconGoInteractive from "../../assets/images/SolutionsServices/icon-Go-Interactive.webp"
import iconGoOnline from "../../assets/images/SolutionsServices/icon-Go-Online.webp"
import iconGoCloud from "../../assets/images/SolutionsServices/icon-Go-Cloud.webp"
import iconGoSmart from "../../assets/images/SolutionsServices/icon-Go-Smart.webp"
import "../../assets/sass/membersFive.scss";

function MembersFive() {
    const { t } = useTranslation();
    return (
        <div className="members-five">
            <div className="members-five-backgroud">
                <div className="members-five-content container">
                    <div className="title">
                        {t('Services.&.Solutions')}
                    </div>
                    <div className="content">
                        <div className="d-flex">
                            <div className="content-image">
                                <img className="image" src={require("../../assets/images/Members/image-pageFive-1.webp")} alt="image" />
                            </div>
                            <div className="d-flex content-box">
                                <div className="Solutions-title-hr-nav-1"><div className="Solutions-title-hr"/></div>
                                <div className="Solutions-title-hr-nav-2"><div className="Solutions-title-hr"/></div>
                                <div className="Solutions-title-hr-nav-3"><div className="Solutions-title-hr"/></div>
                                <div className="Solutions-title-hr-nav-4"><div className="Solutions-title-hr"/></div>
                                <div className="Solutions-title-hr-nav-5"><div className="Solutions-title-hr"/></div>
                                <div className="Solutions-title-hr-nav-6"><div className="Solutions-title-hr"/></div>
                                <div className="Solutions-title-hr-nav-7"><div className="Solutions-title-hr"/></div>
                                <div className="Solutions-title-hr-nav-8"><div className="Solutions-title-hr"/></div>
                                <div className="content-box-left">
                                    <div className="box">
                                        <div className="box-backgroud">
                                            <div>
                                                <Image src={iconSolutionConsulting} alt="image" height="42px" width="42px" />
                                            </div>
                                            <div className="box-text">Go Automation</div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="box-backgroud">
                                            <div>
                                                <Image src={iconGoDigital} alt="image" height="42px" width="42px" />
                                            </div>
                                            <div className="box-text">Go Digital</div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="box-backgroud">
                                            <div>
                                                <Image src={iconGoMobile} alt="image" height="42px" width="42px" />
                                            </div>
                                            <div className="box-text">Go Mobile</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="box-backgroud">
                                            <div>
                                                <Image src={iconGoOnline} alt="image" height="42px" width="42px" />
                                            </div>
                                            <div className="box-text">Go Online</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-box-right">
                                    <div className="box">
                                        <div className="box-backgroud">
                                            <div>
                                                <Image src={iconGoSmart} alt="image" height="42px" width="42px" />
                                            </div>
                                            <div className="box-text">Go Smart</div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="box-backgroud">
                                            <div>
                                                <Image src={iconGoInnovative} alt="image" height="42px" width="42px" />
                                            </div>
                                            <div className="box-text">Go Innovative</div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="box-backgroud">
                                            <div>
                                                <Image src={iconGoInteractive} alt="image" height="42px" width="42px" />
                                            </div>
                                            <div className="box-text">Go Interactive</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="box-backgroud">
                                            <div>
                                                <Image src={iconGoCloud} alt="image" height="42px" width="42px" />
                                            </div>
                                            <div className="box-text">Go Cloud</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembersFive
