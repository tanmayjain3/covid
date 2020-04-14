import React, {useState} from "react";
import "../../styles/Home.css";
import HeaderMid from "./HeaderMid";
import Level from "./Level";
import MiniGraph from "./Minigraph";
import Table from "./Table";
import MapStats from "./MapStats";
import MapParent from "./MapParent";

const Home = ()=>{

    const [data] = useState([
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
    return (
        <div className="home">
            <div className="home-left">
                <HeaderMid heading="India Covid-19 Tracker" subHeading="A crowdsourced initiative" lastUpdated={true}/>
                <Level/>
                <MiniGraph/>
                <h5 className="table-fingerprint">Compiled from state Govt. numbers</h5>
                <Table covidData={data}/>
            </div>
            <div className="home-right">
                <div className="MapExplorer fadeInUp">
                    <HeaderMid heading="India" subHeading="tap over a state/ut for more details"/>
                    <MapStats stateData={data[0]}/>
                    <MapParent/>
                </div>
            </div>
        </div>
    )
};

export default Home;