import react, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../css/home.css'

export default function Home(){
    const [content, setContent] = useState([
        {id:0, title:"HEIDI MANUFACTURING SOLUTION SYSTEM", 
        img:"/images/01_heidi_thumb.png",
        hoverImg:"/images/heidi_thumb_hover.png",
        hoverText:"HEIDI MANUFACTURING SOLUTION SYSTEM",
        type:"Desktop / Mobile",
        description:"This web app is a dashboard that helps employees to operate process management systems more efficiently"},
        {id:1, title:"HEIDI OFFICIAL WEBSITE",
        img:"/images/02_heidi_website_thumb.png",
        hoverImg:"/images/heidi_web_thumb_hover.png",
        hoverText:"HEIDI SOLUTION SYSTEM PROMOTE WEBSITE",
        type:"Desktop / Mobile",
        description:"A web app design intended for the company HEIDI introduction"
        },
        {id:2, title:"adKnowva AD MANAGE SYSTEM",
        img:"/images/03_adknowva_dashboard_thumb.png",
        hoverImg:"/images/adknowva_thumb_hover.png",
        hoverText:"ADKNOWVA ADVERTISEMENT MANAGE DASHBOARD",
        type:"Desktop",
        description:"Web application design for advertisement management of the web, mobile and apps"
        },
        {id:3, title:"WEB-NOVEL VIEWER",
        img:"/images/05_webnovel_thumb.png",
        hoverImg:"/images/webnovel_thumb_hover.png",
        hoverText:"ONLINE WEB-NOVEL VIEWER",
        type:"Desktop / Mobile",
        description:"A web-novel reader app designed for both desktop and mobile."
        },
        {id:4, title:"DEA-GU ENGLISH VILLAGE",
        img:"/images/02_heidi_website_thumb.png",
        hoverImg:"/images/dgev_thumb_hover.png",
        hoverText:"DEA-GU KYEONGBUK ENGLISH VE VILLAGE WEBSITE",
        type:"Desktop / Mobile",
        description:"Web app design that is intended to introduce the company of HUVLE"
        }
    ]);

    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-greetings">
                    <b>This is <div className="home-color">Gangyeon Lee</div></b>
                    
                        
                    
                    <br/>
                    I am a curious observer,<br/>
                    obsessed with creation,<br/>
                    teams' lubricant,<br/>
                    and a <div className="home-color">UX/UI designer.</div>
                </div>
                <div className="home-button-container">
                    <a href="mailto:kangyeon.lee.alicia@gmail.com">
                        <div className="home-button">
                            <p>SAY HELLO</p>
                        </div>
                    </a>
                </div>
                <div className="home-contents-container">
                    {
                        content.map((v,k)=>{
                            if(k%2 == 0){
                                return(
                                    
                                        <div className="content-container">
                                            <Link to={`/project/${v.id}`}>
                                            <div className="content" key={k}>
                                                <div className="content-picture" >
                                                    <img src={process.env.PUBLIC_URL+v.img}></img>
                                                </div>
                                                <div className="content-detail-container" >
                                                    <div className="content-detail" >
                                                        <div className="content-title">
                                                            <b>{v.title}</b>
                                                        </div>
                                                        <div className="content-type">
                                                            {v.type}
                                                        </div>
                                                        <div className="content-description">
                                                            {v.description}
                                                        </div>      
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content-hover-container">
                                                <img src={process.env.PUBLIC_URL+v.hoverImg}/>
                                                <p>{v.hoverText}</p>
                                            </div>
                                            </Link>
                                        </div>
                                )
                            }else{
                                return(
                                    
                                        <div className="content-container">
                                            <Link to={`/project/${v.id}`}>
                                            <div className="content" key={k}>
                                                <div className="content-detail-container" >
                                                    <div className="content-detail" >
                                                        <div className="content-title">
                                                            <b>{v.title}</b>
                                                        </div>
                                                        <div className="content-type">
                                                            {v.type}
                                                        </div>
                                                        <div className="content-description">
                                                            {v.description}
                                                        </div>      
                                                    </div>
                                                </div>
                                                <div className="content-picture" >
                                                    <img src={process.env.PUBLIC_URL+v.img}></img>
                                                </div>
                                            </div>
                                            <div className="content-hover-container">
                                                <img src={process.env.PUBLIC_URL+v.hoverImg}/>
                                                <p>{v.hoverText}</p>
                                            </div>
                                            </Link>
                                        </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}