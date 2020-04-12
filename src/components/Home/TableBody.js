import React, { useState } from "react";
import "../../styles/TableBody.css"
import BodyRow from "./BodyRow";
const TableBody = ({data})=>{
   
return (
    <tbody>
        {
            data.map((stateData,index)=>{
                return (<BodyRow key={index} stateData={stateData} index={index}/>)
            }
            )
        }
    </tbody>
)

}

export default TableBody;