import React from 'react'
import "../../assets/sass/membersFour.scss";

function MembersFour() {
    return (
        <div className="members-four">
            <div className="members-four-backgroud">
                <div className="members-four-contain container">
                    <div className="title">
                        TMA Solutions
                    </div>
                    <div className="title-span">
                        Đối tác công nghệ tin cậy của bạn
                    </div>
                    <div className="content">
                        <div className="d-flex">
                            <div className="content-letf">
                                <div className='content-icon'>
                                    <img src={require("../../assets/images/Members/icon-software-outsourcing-enterprises.webp")} alt="image" />
                                </div>
                                <div className="content-title">Top 10</div>
                                <div className="content-text">Software Outsourcing Enterprises</div>
                            </div>
                            <div className="hr" />
                            <div className="content-betwen">
                                <div className='content-icon'>
                                    <img src={require("../../assets/images/Members/icon-AI-IoT.webp")} alt="image" />
                                </div>
                                <div className="content-title">Top 10</div>
                                <div className="content-text">Doanh nghiệp AI - IoT</div>
                            </div>
                            <div className="hr" />
                            <div className="content-right">
                                <div className='content-icon'>
                                    <img src={require("../../assets/images/Members/icon-fintech.webp")} alt="image" />
                                </div>
                                <div className="content-title">Top 10</div>
                                <div className="content-text">Doanh nghiệp Fintech</div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <div className="d-flex">
                            <div className="col-xl-6 image-col-lab-6">
                                <img className="image-lab-6" src={require("../../assets/images/Members/image-lab-6.webp")} alt="image" />
                            </div>
                            <div className="col-xl-6 image-col-lab-8">
                                <img className="image-lab-8" src={require("../../assets/images/Members/image-lab-8.webp")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembersFour
