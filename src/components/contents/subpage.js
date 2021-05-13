import react, { useEffect, useState } from 'react'
import '../../css/subpage.css'

export default function SubPage(props){
    const columnRole = Object.freeze({"oneColumn":1,"twoColumn":2,"grid":3})
    const dataRole = Object.freeze({"string":1,"image":2})
    const [data, setData] = useState([{
        title:`HEIDI<br/>MANUFACTURING<br/>SOLUTION SYSTEM`,
        titleDescription:`This web app that dashboard<br/>
        helps employees operate<br/>
        <b>process management systems</b><br/>
        <b>more efficiently and save time</b><br/>
        as well as it promotes through <br/>
        the own website.<br/>`,
        titleImage:"/images/pr1/hero.jpg",
        properties:[
            {type:"PROJECT TYPE",data:["Desktop/Mobile"]},
            {type:"ROLE",data:["Project designer","Projuect sub manager"]},
            {type:"KEY SKILLS",data:["Concept Ideation","Visual Design","Prototyping","UI/UX design","Project Management"]},
            {type:"TIMELINE",data:["Oct 2015 - Mar 2016"]},
        ],
        sections:[{
            title:"RESEARCH",
            contents:[
                {
                    role:columnRole.twoColumn,
                    left:"PROJECT OVERVIEW",
                    right:`HEIDI is a factory that manufactures bags. There are almost 100 production lines, and there are more than 1,000 factory employees. Among them, there are more than 100 managers and many supervisors.<br/>
                    How do we get real-time confirmation that so many factory employees are doing their process well? Also, how can the advantage of a process management program be recognized by consumers?`
                },
                {
                    role:columnRole.twoColumn,
                    left:"THE PROBLEM",
                    right:`<b>The factories did not have any digital management system for the workers, they were solely relying on the paper-based process.</b><br/><br/>
                    The management system was not properly established, so managers and supervisors had to print out their employees' work status in document form, receive them, and search and read many complicated working processes one by one. Additionally, there was not a designed introduction site that can promote to clients an efficient manufacturing system linked to apps provided by HEIDI`
                },
                {
                    role:columnRole.oneColumn,
                    title:"NEED-FINDING",
                    contents:[
                        {
                            desc:`<b>01. Interview and Profiles</b><br/><br/>I’ve set up an interview with three factory workers and I investigated how they can report their working process and receive work status.`,
                            data:[
                                {
                                    role:dataRole.string, 
                                    image:"/images/pr1/face1.png",
                                    item:`<b>Supervisor:</b> He controls one production line, and it is difficult to quickly catch the problems of whether there are insufficient materials, missing parts or whether the production line stopped every time.`},
                                {
                                    role:dataRole.string, 
                                    image:"/images/pr1/face2.png",
                                    item:`<b>Employee 1:</b> He works in the sales department, and he has to receive the work status right away from the development and QA departments, but if he could not know the status of one production line part, the status report will delay.`},
                                {
                                    role:dataRole.string, 
                                    image:"/images/pr1/face3.png",
                                    item:`<b>Employee 2:</b> She manages the material on the handle side of the bag, but the process of work with other employees. She is also important, so she has to check in real-time which materials are missing.`}
                            ]
                        },
                        {
                            desc:`<b>02. Analysis Working Status of Factories</b><br/><br/>I tried to identify from the flow of several factories to small unit processes for production. As a result, production was considerably lower than the workforce.`,
                            data:[
                                {role:dataRole.image, item:`/images/pr1/need-finding_01.png`},
                                {role:dataRole.image, item:`/images/pr1/need-finding_02.png`}
                            ]
                        },
                        {
                            desc:`<b>03. Target User Analysis</b><br/><br/>Based on the interview and analysis working status of factories, I found that our main stakeholder is the supervisor who manages all the production lines with each material part and each employee at each part also found that they needed a different solution than the supervisor.`,
                            data:[]
                        }
                    ]
                },
                {
                    role:columnRole.twoColumn,
                    left:"THE SOLUTION",
                    right:`<b>Designing a Dashboard</b><br/><br/>I decided to design a dashboard that efficiently checks out the employee's working status on each section, for quick and easy control. Visualizing the organizing total working process procedure can directly reduce the amount of time it takes to work.`
                },
            ]},
            {
                title:"USER PERSONA",
                contents:[
                    {
                        role:columnRole.twoColumn,
                        left:"OVERVIEW",
                        right:`The following personas are fictional and created to represent a user type that fits the persona of a supervisor or employees based on the data I’ve received.`
                    },
                    {
                        role:columnRole.oneColumn,
                        title:"",
                        contents:[
                            {
                                desc:``,
                                data:[
                                    {role:dataRole.image, item:`/images/pr1/persona_01.png`},
                                    {role:dataRole.image, item:`/images/pr1/persona_02.png`}
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                title:"DESIGN DEVELOPMENT",
                contents:[
                    {
                        role:columnRole.twoColumn,
                        left:"USER JOURNEY MAP",
                        right:`Based on the work status, the information hierarchy to two main parts: Home(dashboard), Profile, more five manage parts: Faulty Report, Test Report, Process, Manage Product Samples, and Order Lists.`
                    },
                    {
                        role:columnRole.oneColumn,
                        title:"",
                        contents:[
                            {
                                desc:``,
                                data:[
                                    {role:dataRole.image, item:`/images/pr1/journeyMap.png`}
                                ]
                            }
                        ]
                    },
                    {
                        role:columnRole.twoColumn,
                        left:"LOW FIDELITY<br/> WIREFRAME",
                        right:`I designed two types which are a status check menu for the supervisor and a system that can be checked by the general factory employees.`
                    },
                    {
                        role:columnRole.grid,
                        column:3,
                        title:"For Supervisor",
                        items:[
                            {item:"/images/pr1/web01.png", class:""},
                            {item:"/images/pr1/web02.png", class:""},
                            {item:"/images/pr1/web03.png", class:""},
                            {item:"/images/pr1/web04.png", class:""},
                            {item:"/images/pr1/web05.png", class:""},
                            {item:"/images/pr1/web06.png", class:""},
                            {item:"/images/pr1/web07.png", class:""},
                            {item:"/images/pr1/web08.png", class:""},
                            {item:"/images/pr1/web09.png", class:""},
                            {item:"/images/pr1/web10.png", class:""},
                            {item:"/images/pr1/web11.png", class:""},
                            {item:"/images/pr1/web12.png", class:""},
                            {item:"/images/pr1/web13.png", class:""},
                            {item:"/images/pr1/web14.png", class:""},
                            {item:"/images/pr1/web15.png", class:""},
                        ]
                    },
                    {
                        role:columnRole.grid,
                        column:4,
                        title:"For Employees",
                        items:[
                            {item:"/images/pr1/mobile01.png", class:""},
                            {item:"/images/pr1/mobile02.png", class:""},
                            {item:"/images/pr1/mobile03.png", class:""},
                            {item:"/images/pr1/mobile04.png", class:""},
                            {item:"/images/pr1/mobile05.png", class:""},
                            {item:"/images/pr1/mobile06.png", class:""},
                            {item:"/images/pr1/mobile07.png", class:""},
                            {item:"/images/pr1/mobile08.png", class:""},
                            {item:"/images/pr1/mobile09.png", class:""},
                            {item:"/images/pr1/mobile10.png", class:""},
                            {item:"/images/pr1/mobile11.png", class:""},
                            {item:"/images/pr1/mobile12.png", class:""},
                            {item:"/images/pr1/mobile13.png", class:""},
                            {item:"/images/pr1/mobile14.png", class:""},
                            {item:"/images/pr1/mobile15.png", class:""},
                            {item:"/images/pr1/mobile16.png", class:""},
                        ]
                    },
                ]
            },
            {
                title:"FINAL DESIGN",
                contents:[
                    {
                        role:columnRole.twoColumn,
                        left:"STYLE GUIDE",
                        right:`Establishing color, font, and typographic scales on each different breakpoints. This guide is useful to act as a reference for a developer to transform the design into reality in code. below things I could do to design the dashboard.`
                    },
                    {
                        role:columnRole.grid,
                        column:2,
                        title:"",
                        items:[
                            {item:"/images/pr1/01 COLOR.jpg", class:""},
                            {item:"/images/pr1/02 FONT.jpg", class:""},
                            {item:"/images/pr1/03 BUTTON_01.jpg", class:""},
                            {item:"/images/pr1/03 BUTTON_02.jpg", class:""},
                        ]
                    },
                ]
            },
            {
                title:"RESEARCH",
                contents:[{}]
            },
        ]

    }])

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    const renderDependsOnRole = (content) =>{
        switch(content.role){
            case columnRole.twoColumn:
                return dividedInto2(content)
            case columnRole.oneColumn:
                return oneLine(content)
            case columnRole.grid:
                return pictureGridMap(content)
        }
    }

    const dividedInto2 = (item) =>{
        return (
            <div className="sub-section-detail-half-column" >
                <div className="sub-section-detail-left" dangerouslySetInnerHTML={{__html:item.left}}>
                </div>
                <div className="sub-section-detail-right" dangerouslySetInnerHTML={{__html:item.right}}>
                </div>
            </div>
        )
    }

    const oneLine = (item) =>{
        return(
            <div className="sub-section-detail-one-column" >
                {
                    item.title != "" &&<div className="sub-section-detail-title">{item.title}</div>
                }
                {
                    item.contents.map((v,k)=>{
                        return (
                            <div style={{paddingBottom: item.contents.length -1 == k ? '0px' : '150px'}} > {/* last item shouldn't have a margin */}
                                {
                                    v.desc != "" && <div className="sub-section-detail-subtitle" dangerouslySetInnerHTML={{__html:v.desc}}></div>
                                }
                                {   // iterate data in contents...
                                    v.data.map((children, key)=>{
                                        return ( // different render required for picture and string based.
                                            children.role == dataRole.string ? 
                                            oneLineString(children.image, children.item) :
                                            oneLinePicture(children.item)
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const oneLineString = (image, item) =>{
        return (
            <div className="sub-section-detail-column-string left-padding-100">
                <img src={image} className="sub-section-detail-image"/>
                <div className="sub-section-detail-right sub-section-detail-string" dangerouslySetInnerHTML={{__html:item}}>
                </div>
            </div>
        )
    }

    const oneLinePicture = (item)=>{
        return ( // picture needs to be centerized
            <div>
                <img src={item} style={{maxWidth:'800px', width:'100%', display:'block', margin:'0 auto', paddingBottom:'50px'}}/>
            </div>
        )
    }

    const pictureGridMap = (item) => {
        return (
            <div>
                {
                    item.title != "" &&<p className="sub-section-grid-title">{item.title}</p>
                }
                <div className={`sub-section-grid-${item.column} left-padding-100`}>
                    
                    {
                        item.items.map((v,key)=>{
                            return(
                                <div className="sub-section-grid-item" key={key}>
                                    <img src={v.item} className={v.class}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    
    return (
        <div className="sub-container">
            <div className="sub-title">
                <div className="sub-title-left-panel" dangerouslySetInnerHTML={{__html:data[props.match.params.id].title}}>
                </div>
                <div className="sub-title-right-panel" dangerouslySetInnerHTML={{__html:data[props.match.params.id].titleDescription}}>
                </div>
            </div>
            <div className="sub-title-image">
                <img src={data[props.match.params.id].titleImage} />
            </div>
            <div className="sub-component">
                <div className="sub-project-properties">
                    {
                        data[props.match.params.id].properties.map((v, k) => {
                            return(
                                <div className="sub-project-properties-item" key={k}>
                                    <div className="properties-title">{v.type}</div>
                                    <div className="properties-value">{v.data.map(str=><p>{str}</p>)}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <hr/>
                {
                    data[props.match.params.id].sections.map((section, key)=>{
                        return (
                            <div>
                                <div className="sub-section" key={key}>
                                    <p>{section.title}</p>
                                    <div className="sub-section-detail">
                                        {
                                            section.contents.map((content,k)=>{
                                                return (
                                                        <div key={k}>
                                                            {renderDependsOnRole(content)}
                                                        </div>
                                                )

                                            })
                                        }
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}