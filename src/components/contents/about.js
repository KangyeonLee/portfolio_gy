import react, { useState } from 'react'
import '../../css/about.css'

export default function About() {
    const [detail, setDetail] = useState([
        {
            heading: "I am-",
            paragraph1: `A UX/UI designer from South Korea.
            After I got my bachelor degree in Visual Design in Korea. 
            After I moved to Canada, I graduated from The College of Seneca with a diploma in Computer Programming.`,
            paragraph2: `I have 5 years of design experience in web, mobile app and UX/UI. My main tasks included designing in detail pages, contents, and landing pages for both desktop and mobile. `
        },
        {
            heading: "How my career started-",
            paragraph1: `First, I’ve started my career as a web designer which corresponded with my major. I was the only designer in my team / company, with no luxury of having a mentor or a senior designer to teach me the work process, or help me out when there was a problem. Yet the projects came in waves demanding me to solve problems and projects I’ve never trained for; I had to do UX and UI design without any training in these fields. After five years of these experiences, I’m happy with the results: a confident designer who self-taught herself how to solve UX/UI problems on the field, and numerous pages of portfolio.`,
            paragraph2: `With every opportunity given to me, I’m always looking to learn something new from them, and bring my strength of being the teammate who’s positive, efficient and easy to work with.`
        },
        {
            heading: "In future-",
            paragraph1: `I desire to figure out more and dig deeper into the study of design and adopt any related knowledge to grow myself as a better designer.`,
            paragraph2: `As a designer, I aspire to design memorable works for people. 
            I am highly passionate and motivated about aspects of design, such as market demands, industry trends and user-product interaction to provide the solution and design with a user-first mentality.`
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