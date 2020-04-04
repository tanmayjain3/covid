import React from "react";
import "../../styles/Level.css"
import LevelItem from "./LevelItem";

const Level = ()=>{
    return (
        <div className="level fandeInUp">
            <LevelItem styleName="level-item confirmed" name="confirmed" nuOfCases="2020"/>
            <LevelItem styleName="level-item active" name="active" nuOfCases="1200"/>
            <LevelItem styleName="level-item recovered" name="recovered" nuOfCases="800"/>
            <LevelItem styleName="level-item deceased" name="deceased"nuOfCases="20"/>
        </div>
    )
};


export default Level;