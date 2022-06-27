import React, { useState, useEffect, useContext } from "react";
import { Info } from "./component/info";
import { Modal } from "./component/modal";

const FormatoInfoPlanets = ({data=[], img, name, setFavorite, favorite}) => {

    const [info, setInfo] = useState([]);

    return (
    <div className="row">
        {
            data.map((item, index) => (
                <div key={index} className="col-sm-12 col-md-6 col-lg-4 g-4">
                <div className="card bg-dark bg-gradient rounded text-light" >
                    <img src={img} />
                    <div className="card-body border-top border-4 border-secondary p-0 text-center" id="">
                        <h5 className="p-1 m-0" id="bodycard">{item.name}</h5>
                        {/* <Info url={item.url} index={index} setInfo={setInfo}/> */}
                        <button className="btn btn-secondary m-2" onClick={() => setFavorite([...favorite, item.name])}>Add to Favorites</button>
                    </div>
                </div>
                    <Modal url={item.url} index={index} info={info} infoMessage={info.name}/>
                </div>
            ))
        }
        
    </div>
    )
}

export default FormatoInfoPlanets
