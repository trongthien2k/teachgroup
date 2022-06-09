import React from 'react'
import { useTranslation } from "react-i18next";
import "../../assets/sass/largeTalentPool.scss";

function LargeTalentPool() {
    const { t } = useTranslation();
    return (
        <div className="large-talent-pool">
            <div className="large-talent-pool-backgroud-image">
                <img className="image-backgroud" src={require("../../assets/images/Members/large-talent-pool-backgroud.webp")} alt="image" />
            </div>
            <div className="large-talent-pool-backgroud">
                <div className="large-talent-pool-contain container">
                    <div className="title">
                        <div>Large Talent Pool &</div>
                        <div>Well-established Training System</div>
                    </div>
                    <div className="content">
                        <div className="content-image">
                            <img className="image" src={require("../../assets/images/Members/image-content-large-tablent.webp")} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LargeTalentPool
