import React from "react";
import "../../styles/Home.css";
import HeaderMid from "./HeaderMid";
import Level from "./Level";
import MiniGraph from "./Minigraph";

const Home = ()=>{
    return (
        <div className="home">
            <div className="home-left">
                <HeaderMid/>
                <Level/>
                <MiniGraph/>
            </div>
            <div className="home-right"></div>
        </div>
    )
};

export default Home;