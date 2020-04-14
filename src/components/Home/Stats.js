import React from "react";

const Stats = ({name, caseType, caseNum})=>{
    return (
        <div className={name}>
            <h5>{caseType}</h5>
            <div className="stats-bottom">
             <h1>{caseNum}</h1>
            </div>
        </div>
    )
}

export default Stats;