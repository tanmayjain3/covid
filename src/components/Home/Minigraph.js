import React from "react";
import Graph from "./Graph";
import "../../styles/Minigraph.css"

const MiniGraph =()=>{
    return (
        <div className="minigraph">
            <Graph color="#ff073a"/>
            <Graph color="#007bff"/>
            <Graph color="#28a745"/>
            <Graph color="#6c757d"/>
        </div>
    )
}

export default MiniGraph;