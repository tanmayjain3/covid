import React,{useState} from "react";
import "../../styles/TableHeading.css";

const TableHeading = ({heading, arrow, dynamicStyle="sitcky"})=>{

    const [arrowPosition, setArrowPosition] = useState("arrow-down");
    const [showArrow, setShowArrow] = useState(arrow);

    const changeOrder = ()=>{
        setArrowPosition(arrowPosition==="arrow-down"?"arrow-up":"arrow-down");
    }

    return (
        <th className={dynamicStyle} onClick={changeOrder} id={heading}>
            <div className="content-heading" id={heading}>
                <abbr title={heading} id={heading}>{heading}</abbr>
                <div className={showArrow}>
                    <div className={arrowPosition}></div>
                </div>
            </div>
        </th>
    )
}

export default TableHeading;