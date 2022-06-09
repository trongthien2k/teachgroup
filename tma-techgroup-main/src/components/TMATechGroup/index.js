import React from 'react';
import TMASolutions from "./TMASolutions"
import TMABinhDinh from "./TMABinhDinh"
import TMAInnovation from './TMAInnovation';
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../../assets/sass/techGroup.scss"

function TMATechGroup(props) {
    const { t } = useTranslation();
    return (
        <div id='tma-tech-group' className='TMA-Tech-Group'>
            <div className="tech-group-backgroundImage">
                <Image className="tech-group-backgroundImage-Image" src={require("../../assets/images/TMATechGroup/backgroud-tma-solution.webp")} alt="image"/>
            </div>
            <div className="tech-group-backgroundImage-bd">
                <Image className="tech-group-backgroundImage-Image-bd" src={require("../../assets/images/TMATechGroup/backgroud-tma-binhdinh.webp")} alt="image"/>
            </div>
            <div className="tech-group-backgroundImage-inno">
                <Image className="tech-group-backgroundImage-Image-inno" src={require("../../assets/images/TMATechGroup/backgroud-tma-binhdinh.webp")} alt="image"/>
            </div>
            <div className='tech-group-contain-img'>
                <Image className='tech-group-backgroud-img' src={require("../../assets/images/TMATechGroup/background-TMA-Tech-Group.webp")} alt="image"/>
            </div>
            <div className='container'>
                <div className='title'>
                    {t("TMA.Tech.Group")}
                </div>
                <div className='padding-top-50'>
                    <TMASolutions />
                    <TMABinhDinh />
                    <TMAInnovation />
                </div>
            </div>
        </div>
    );
}

export default TMATechGroup;