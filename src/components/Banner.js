
import React, {useEffect} from 'react';
import "../styles/Banner.css";

const Banner = () =>{

    let text = "Hello";
    let texts = ["Hi this is tanmay", "this is a demo project", "help me get it running"];
    let bannerText = ()=>{
        text = texts[Math.floor(Math.random()*texts.length)];
        console.log("tanmay",text);
    }
    useEffect(()=>{

    },[text])
    
    setInterval(bannerText,2000);
    return(
        <div className="banner">
            <div className="snippet">
                {text}
            </div>
        </div>
        )
}

export default Banner;