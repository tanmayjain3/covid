import React, { useState, useEffect } from "react";
import "../../styles/Table.css";
import TableHeading from "./TableHeadings";
import TableBody from "./TableBody";

const Table = ({covidData})=>{
    const [headings, setHeadings] = useState([
        {
            name:"state/ut",
            arrow:false
        },
        {
            name:"confirmed",
            arrow:true
        },
        {
            name:"active",
            arrow:false
        },
        {
            name:"recovered",
            arrow:false
        },
        {
            name:"deceased",
            arrow:false
        }
    ]);
    const [data, setData] = useState(covidData);

    const handleHeaderClick = (event) =>{
        let headingClicked = event.target.id;
        let headingData = headings;
        headingData.forEach((state)=>{
            if(state.name===headingClicked){
                state.arrow=true;
            } else{
                state.arrow= false;
            }
        })
        let stateData = data;
        stateData.sort((a,b)=>{
            return  b[headingClicked]-a[headingClicked];
        })
        setData(stateData);
        setHeadings(headingData);
        
    }
    
    const tableBody =(stateData)=>{
       return  <TableBody data={stateData}/>
    
    }

    return (
        <table className="table fadeInUp">
            <thead>
            { <tr onClick={handleHeaderClick}>
                    {headings.map((heading , index) => {
                        return <TableHeading key={index} heading={heading.name} dynamicStyle={index===0?"sticky state-heading":"sticky"} arrow={heading.arrow?"arrow":"noArrow"}/>
                    })}
                </tr>
            }
            </thead>
            {tableBody(data)}
        </table>
    )
}


export default Table;