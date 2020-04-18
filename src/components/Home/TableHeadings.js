import React from "react";
import "../../styles/TableHeading.css";

class TableHeading extends React.Component{
    constructor(props){
        super(props)
        this.setState({props})
    }

    render(){
        const {dynamicStyle, heading,arrow,arrowPosition} = this.props;
        return (
            <th className={dynamicStyle} id={heading}>
                <div className="content-heading" id={heading}>
                    <abbr title={heading} id={heading}>{heading}</abbr>
                    <div className={arrow}>
                        <div className={arrowPosition}></div>
                    </div>
                </div>
            </th>
        )
    }
} 


export default TableHeading;