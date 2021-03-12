import react, { useState } from 'react'
import '../../css/about.css'

export default function About() {
    const [detail, setDetail] = useState([
        {
            heading: "I am-",
            paragraph1: `A UI/UX designer from South Korea. 
        After graduating from The University with a Bachelor degree in Visual Design in Korea. Also, I went to Canada, and I graduated from The College of Seneca with a diploma in Computer Programming.`,
            paragraph2: `I began my web/App/UI/UX design career for five years in the web design industry, and I designed web or apps in detail pages, contents, and landing pages. `
        },
        {
            heading: "Working stories-",
            paragraph1: `Firstly, when I started working as a web designer, I was the only designer in my team or company. There was no one to teach me the work process, no one to help me when I was a delay in my work, and no one to ask for help. I encountered everything for was the first time, and I have learned anything by myself. The result is that I can show this portfolio as a UI/UX designer for the past five years. That is why I am confident that I can work through it by myself if it might be left me high and dry.`,
            paragraph2: `With every working opportunity, I have been striven to enhance and accept new knowledge to fully experience design's culture.`
        },
        {
            heading: "In future-",
            paragraph1: `I desire more figuring out the design area and more adopt related working area knowledge.`,
            paragraph2: `As a designer, I aspire to design memorable works for people. I am highly passionate and motivated about aspects of design, trends, human interaction, and industrial to provide the solution and design with a user-first mentality.`
        },
    ])

    const [skill, setSkill] = useState([
        {title:"TYPE",
         skills:['Passionate Doer',
            'Excellent Time Manager',
            'Critical Thinker',
            'Fast Learner',
            'Autodidact']
        },
        {title:"KEY SKILLS",
        skills:['Adobe Photoshop',
            'Adobe illustrator',
            'Sketch/Figma/Adobe XD',
            'HTML/CSS/Javascript/Node.js',
            'Java/MySQL/C++']
       },
       {title:"MY BACKGROUND",
       skills:['Web Design',
        'UI/UX Design',
        'Computer Programming']
      }
    ])

    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-introduction">
                    <div className="about-left-panel">
                        <div className="about-portrait">
                            <img src={process.env.PUBLIC_URL+"/images/0112.jpeg"} width="80%"/>
                        </div>
                        <div className="about-button-container">
                            <a href="mailto:kangyeon.lee.alicia@gmail.com">
                                <div className="home-button">
                                    <p>SAY HELLO</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="about-right-panel">
                        <div className="about-detail">
                            <div className="about-title">
                                <b>Hi there-<br /> This is Gangyeon Lee!</b>
                            </div>
                            {
                                detail.map((v, k) => {
                                    return (
                                        <div className="about-details">
                                            <b>{v.heading}</b>
                                            <p>{v.paragraph1}</p>
                                            <p>{v.paragraph2}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="about-skills">
                    {
                        skill.map((v, k) => {
                            return (
                                <div className="about-skill">
                                    <div className="about-skill-title">
                                        {v.title}
                                    </div>
                                    <div className="about-skill-detail">
                                        {v.skills.map((value,key)=>{
                                            return (
                                                <p>{value}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}