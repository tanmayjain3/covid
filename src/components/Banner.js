
import React, {useEffect, useState} from 'react';
import "../styles/Banner.css";

const Banner = () =>{

    const [text, setText] = useState("Even the Virus Does not discriminate. Why do you? DO NOT DISCRIMINATE. WE are all Indians! ");
    let texts = ["Be a true Indian. Show compassion. Be considerate. Help those in need. We will get through this!",
     "Lockdown means LOCKDOWN! Avoid going out unless absolutely necessary. Stay safe! ",
      "If you have any medical queries, reach out to your district administration or doctors! "];
    let bannerText = ()=>{
        setText(texts[Math.floor(Math.random()*texts.length)]);
    }
    useEffect(() => {
        const interval = setInterval(bannerText, 3000);
        return () => clearInterval(interval);
      }, []);

    return(
        <div className="banner">
            <div className="snippet">
                {text}
            </div>
        </div>
        )
}

export default Banner;