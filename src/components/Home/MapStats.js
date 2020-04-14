import React from "react";
import "../../styles/MapStats.css";
import Stats from "./Stats";

const MapStats = ({stateData})=>{
    return (
        <div className="map-stats">
            <Stats name="stats red" caseType="confirmed" caseNum={stateData.confirmed}/>
            <Stats name="stats blue" caseType="active" caseNum={stateData.active}/>
            <Stats name="stats green" caseType="recovered" caseNum={stateData.recovered}/>
            <Stats name="stats grey" caseType="deceased" caseNum={stateData.deceased}/>
            <Stats name="stats purple" caseType="tested" caseNum={0}/>
        </div>
    )
}

export default MapStats;