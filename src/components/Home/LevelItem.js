import React from "react";
import "../../styles/LevelItem.css";

const LevelItem = ({styleName,name, nuOfCases})=>{
    return (
        <div className={styleName}>
            <h5>{name}</h5>
            <h1>{nuOfCases}</h1>
            <h4>[+0]</h4>
        </div>
    )
};

export default LevelItem;