import React, { useState } from "react";
import "../../styles/BodyRow.css"
const BodyRow = ({stateData,index})=>{
    const [spanClass, setSpanClass] = useState("dropdown rotateDownRight")
    const handleClick = (event) =>{
        event.preventDefault();
        setSpanClass(spanClass==="dropdown rotateDownRight"?"dropdown rotateRightDown":"dropdown rotateDownRight")
    }
    let background = index%2===0?"":"#F8F9FA";
    return (
        <tr className="state" onClick={handleClick} style={{background:background}}>
            <td>
                <div className="table_title-wrapper">
                    <span className={spanClass}>
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <polyline points="6 9 12 15 18 9 "></polyline>
                        </svg>
                    </span>
                    {stateData.state}
                </div>
            </td>
            <td>
                <span className="table_count-text">{stateData.confirmed}</span>
            </td>
            <td style={{color:"inherit"}}>{stateData.active}
            </td>
            <td>
                <span className="table_count-text">{stateData.recovered}</span>
            </td>
            <td>
                <span className="table_count-text">{stateData.deceased}</span>
            </td>
        </tr>
    )
}

export default BodyRow;