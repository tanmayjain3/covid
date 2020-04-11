import React, { useState } from "react";
import "../../styles/Table.css";
import TableHeading from "./TableHeadings";
import TableBody from "./TableBody";

const Table = ()=>{
    const [headings] = useState(["state/ut","confirmed","active","recovered","deceased"]);
    const [showArrow, setShowArrow] = useState("confirmed");
    const handleHeaderClick = (event) =>{
        setShowArrow(event.target.id)
    }
return (
    <table className="table fadeInUp">
        <thead>
           { <tr onClick={handleHeaderClick}>
                {headings.map((element , index) => (
                    <TableHeading id={index} heading={element} dynamicStyle={index===0?"sticky state-heading":"sticky"} arrow={showArrow===element?"none":"arrow"}/>
                ))}
            </tr>}
        </thead>
        <TableBody/>
    </table>
)
}


export default Table;