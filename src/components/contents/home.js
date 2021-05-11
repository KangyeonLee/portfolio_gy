import react, { useState } from 'react'
import '../../css/home.css'

export default function Home(){
    const [content, setContent] = useState([
        {id:1, title:"HEIDI MANUFACTURING SOLUTION SYSTEM", 
        img:"/images/01 heidi_thumb.jpg",
        type:"Web Application / App",
        description:"This web app is a dashboard that helps employees to operate process management systems more efficiently"},
        {id:2, title:"HEIDI OFFICIAL WEBSITE",
        img:"/images/02 heidi__website_thumb.jpg",
        type:"Web / Mobile web Application",
        description:"A web app design intended for the company HEIDI introduction"
        },
        {id:3, title:"adKnowva AD MANAGE SYSTEM",
        img:"/images/03 adknowva_dashboard_thumb.jpg",
        type:"Web Application",
        description:"Web application design for advertisement management of the web, mobile and apps"
        },
        {id:4, title:"WEB-NOVEL VIEWER",
        img:"/images/05 webnovel_thumb.jpg",
        type:"Web Application",
        description:"A web-novel reader app designed for both desktop and mobile."
        },
        {id:5, title:"DEA-GU ENGLISH VILLAGE",
        img:"/images/02 heidi__website_thumb.jpg",
        type:"Web / Mobile web Application",
        description:"Web app design that is intended to introduce the company of HUVLE"
        }
    ]);

    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-greetings">
                    <b>This is <div className="home-color">Gangyeon Lee</div>!</b>
                    
                        
                    
                    <br/>
                    I am a curious observer,<br/>
                    obsessed with creation,<br/>
                    teams' lubricant,<br/>
                    and a <div className="home-color">UI/UX designer.</div>
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
                                )
                            }else{
                                return(
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
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}