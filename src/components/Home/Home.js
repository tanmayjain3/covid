import React from "react";
import "../../styles/Home.css";
import HeaderMid from "./HeaderMid";
import Level from "./Level";
import MiniGraph from "./Minigraph";
import Table from "./Table";

const Home = ()=>{
    return (
        <div className="home">
            <div className="home-left">
                <HeaderMid/>
                <Level/>
                <MiniGraph/>
                <h5 className="table-fingerprint">Compiled from state Govt. numbers</h5>
                <Table/>
            </div>
            <div className="home-right"></div>
        </div>
    )
};

export default Home;