import React from "react";
import "../assets/sass/clientsMap.scss"

const ClientsMap = () => {
  return (
    <div className="clients-map">
        <div className="clients-map-backgroud">
            <div className="clients-map-content">
                <div className="clients-map-text">Clients from 30 countries</div>
                <div className="clients-map-img">
                    <img src={require("../assets/images/ClientsMap/image-clients-map.webp")} alt="image" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default ClientsMap;
