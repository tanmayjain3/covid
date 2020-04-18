import React from "react";
import "../../styles/Table.css";
import TableHeading from "./TableHeadings";
import TableBody from "./TableBody";

class Table extends React.Component{
    constructor(props){
        super(props)
    this.state = {"headings":[
        {
            name:"state/ut",
            arrow:false,
            arrowPosition:"arrow-down"
        },
        {
            name:"confirmed",
            arrow:true,
            arrowPosition:"arrow-down"
        },
        {
            name:"active",
            arrow:false,
            arrowPosition:"arrow-down"
        },
        {
            name:"recovered",
            arrow:false,
            arrowPosition:"arrow-down"
        },
        {
            name:"deceased",
            arrow:false,
            arrowPosition:"arrow-down"
        }
    ],
    "data":props.covidData,
    "lastClicked":null
        };

    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.tableBody = this.tableBody.bind(this);
    this.tableHeading = this.tableHeading.bind(this);
    }

    handleHeaderClick (event){
        let headingClicked = event.target.id;
        let headingData = this.state.headings;
        let arrowPosition;
        headingData.forEach((heading)=>{
            if(heading.lastClicked ===headingClicked){
                heading.arrowPosition =heading.arrowPosition==="arrow-down"? "arrow-up":"arrow-down";
                arrowPosition = heading.arrowPosition;
            } else if(heading.name===headingClicked){
                heading.arrow=true;
                heading.lastClicked = headingClicked;
            } else{
                heading.arrow= false;
            }
        })
        let stateData = this.state.data;
        stateData.sort((a,b)=>{
            return  b[headingClicked]-a[headingClicked];
        })
        if(arrowPosition && arrowPosition==="arrow-up"){
            stateData.reverse();
        }
        this.setState({data:stateData,headings:headingData})
        
    }
    
    tableBody (stateData){
       return  <TableBody data={stateData}/>
    }

    tableHeading(headings){
        return headings.map((heading , index) => {
            return <TableHeading key={index} arrowPosition={heading.arrowPosition} heading={heading.name} dynamicStyle={index===0?"sticky state-heading":"sticky"} arrow={heading.arrow?"arrow":"noArrow"}/>
        })
    }
render(){
    return (
        <table className="table fadeInUp">
            <thead>
            { <tr onClick={this.handleHeaderClick}>
                  {this.tableHeading(this.state.headings)}
                </tr>
            }
            </thead>
            {this.tableBody(this.state.data)}
        </table>
    )
    }
}    



export default Table;