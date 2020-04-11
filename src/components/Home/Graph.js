import React,{useState} from "react";
import LineChart from 'react-svg-line-chart'
import "../../styles/Graph.css";

const Graph =({color})=>{
    const [data] = useState([{x:1,y:1},{x:2,y:10},{x:3,y:14},{x:4,y:20},{x:5,y:25}]);
    return (
        <div className="lineChart-parent">
            <LineChart 
            data={data.map((point, i) => ({...point}))}
            axisVisible={false}
            gridVisible={false}
            pointsVisible={false}
            labelsVisible={false}
            pathSmoothing={0}
            pathWidth={20}
            pathColor={color}/>
        </div>
    )
}

export default Graph;