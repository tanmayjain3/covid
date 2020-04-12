import React, { useState } from "react";
import "../../styles/Table.css";
import TableHeading from "./TableHeadings";
import TableBody from "./TableBody";

const Table = ()=>{
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
    const [data, setData] = useState([
        {
            state:"Maharashtra",
            confirmed:1700,
            active:"1400",
            recovered:"250",
            deceased:"50"
        },
        {
            state:"Rajasthan",
            confirmed:1600,
            active:1300,
            recovered:100,
            deceased:0
        },
        {
            state:"Telangana",
            confirmed:1650,
            active:850,
            recovered:700,
            deceased:100
        },
        {
            state:"Gujarat",
            confirmed:1800,
            active:1200,
            recovered:400,
            deceased:200
        },
        {
            state:"West Bengal",
            confirmed:1930,
            active:1800,
            recovered:30,
            deceased:100
        },
        {
            state:"Uttar Pradesh",
            confirmed:1000,
            active:400,
            recovered:340,
            deceased:260
        },
        {
            state:"Bihar",
            confirmed:800,
            active:200,
            recovered:300,
            deceased:300
        }
    ]);

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