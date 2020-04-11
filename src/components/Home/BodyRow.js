import React, { useState } from "react";
import "../../styles/BodyRow.css"
const BodyRow = ()=>{

    const [spanClass, setSpanClass] = useState("dropdown rotateDownRight")
    const handleClick = () =>{
        setSpanClass(spanClass==="dropdown rotateDownRight"?"dropdown rotateRightDown":"dropdown rotateDownRight")
    }
    return (
        <tr className="state" onClick={handleClick}>
            <td>
                <div className="table_title-wrapper">
                    <span className={spanClass}>
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <polyline points="6 9 12 15 18 9 "></polyline>
                        </svg>
                    </span>
                    Maharashtra
                </div>
            </td>
            <td>
                <span className="table_count-text"></span>
            </td>
        </tr>
    )
}

export default BodyRow;