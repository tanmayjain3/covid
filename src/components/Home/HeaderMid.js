import React from "react";
import "../../styles/HeaderMid.css";

const HeaderMid = ()=>{

    return (
        <div className="header fadeInUp">
            <div className="header-mid">
                <div className="title">
                    <h1 className="heading">India COVID-19 Tracker</h1>
                    <h6 className="heading6">A crowdsourced Initiative</h6>
                </div>
                <div className="last-update">
                    <h6>Last Updated</h6>
                    <h6 style={{fontWeight:600, color: "#50B667"}}>About 3 hours ago</h6>
                    <h6 style={{fontWeight:600, color: "#50B667"}}>04 Apr, 10:27 IST</h6>
                </div>
            </div>
        </div>
    )
}

export default HeaderMid;