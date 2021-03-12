import react, { useState } from 'react'
import '../../css/home.css'

export default function Home(){
    const [content, setContent] = useState([
        {id:1, title:"HEIDI MANUFACTURING SOLUTION SYSTEM", 
        img:"/images/01 heidi_thumb.jpg",
        type:"Web Application / App",
        description:"This web app that dashboard helps employees operate process management systems more efficiently and save time"},
        {id:2, title:"HEIDI OFFICIAL WEBSITE",
        img:"/images/02 heidi__website_thumb.jpg",
        type:"Web / Mobile web Application",
        description:"Web app design that is intended to introduce the company of HEIDI"
        },
        {id:3, title:"adKnowva AD MANAGE SYSTEM",
        img:"/images/03 adknowva_dashboard_thumb.jpg",
        type:"Web Application",
        description:"This web application is managed and controlled that the web, mobile, and apps' advertisement business"
        },
        {id:4, title:"adKnowva OFFICIAL WEBSITE",
        img:"/images/04 adknowva_thumb.jpg",
        type:"Web / Mobile web Application / App",
        description:"Web app design that is intended to introduce the company of adKnowva which is an advertisement company"
        },
        {id:5, title:"WEB-NOVEL VIEWER",
        img:"/images/05 webnovel_thumb.jpg",
        type:"Web Application",
        description:"This web app and app provide a viewer facility for web-novels on online"
        },
        {id:6, title:"DEA-GU ENGLISH VILLAGE",
        img:"/images/02 heidi__website_thumb.jpg",
        type:"Web / Mobile web Application",
        description:"This web app is managed students' schedule of English village through the web, mobile site"
        }
    ]);

    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-greetings">
                    <b>This is Gangyeon Lee!</b><br/>
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