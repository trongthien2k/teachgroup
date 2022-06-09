import React from 'react'
import { useTranslation } from "react-i18next";
import "../../assets/sass/strongQualityFoundation.scss";

function StrongQualityFoundation() {
    const { t } = useTranslation();
    return (
        <div className="strong-quality-foundation">
            <div className="strong-quality-foundation-backgroud">
                <div className="strong-quality-foundation-contain container">
                    <div className="title">{t('Strong.Quality.Foundation')}</div>
                    <div className="content">
                        <div className="content-image">
                            <img className="image" src={require("../../assets/images/Members/image-strong-quality-foundation.webp")} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StrongQualityFoundation
