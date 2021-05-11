import react, { useState } from 'react'
import '../../css/subpage.css'

export default function SubPage(props){
    const columnRole = Object.freeze({"oneColumn":1,"twoColumn":2})
    const dataRole = Object.freeze({"string":1,"image":2})
    const [data, setData] = useState([{
        title:`HEIDI\nMANUFACTURING\nSOLUTION SYSTEM`,
        titleDescription:[
            {text:"This web app that dashboard",isBold:false},
            {text:"helps employees operate",isBold:false},
            {text:"process management systems ",isBold:true},
            {text:"more efficiently and save time",isBold:true},
            {text:"as well as it promotes through ",isBold:false},
            {text:"the own website.",isBold:false}],
        titleImage:"/images/pr1/hero.jpg",
        properties:[
            {type:"PROJECT TYPE",data:["Desktop/Mobile"]},
            {type:"ROLE",data:["Project designer","Projuect sub manager"]},
            {type:"KEY SKILLS",data:["Concept Ideation","Visual Design","Prototyping","UI/UX design","Project Management"]},
            {type:"TIMELINE",data:["Oct 2015 - Mar 2016"]},
    ],
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
                            {role:dataRole.string, item:`<b>Supervisor:</b> He controls one production line, and it is difficult to quickly catch the problems of whether there are insufficient materials, missing parts or whether the production line stopped every time.`},
                            {role:dataRole.string, item:`<b>Employee 1:</b> He works in the sales department, and he has to receive the work status right away from the development and QA departments, but if he could not know the status of one production line part, the status report will delay.`},
                            {role:dataRole.string, item:`<b>Employee 2:</b> She manages the material on the handle side of the bag, but the process of work with other employees. She is also important, so she has to check in real-time which materials are missing.`}
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
        ]

    }])

    const renderDependsOnRole = (key) =>{
        switch(data[props.match.params.id].contents[key].role){
            case columnRole.twoColumn:
                return dividedInto2(data[props.match.params.id].contents[key])
            case columnRole.oneColumn:
                if(data[props.match.params.id].contents[key])
                return oneLine(data[props.match.params.id].contents[key])

        }
    }

    const dividedInto2 = (item) =>{
        return (
            <div className="sub-reseach-detail-half-column" >
                <div className="sub-reseach-detail-left" dangerouslySetInnerHTML={{__html:item.left}}>
                </div>
                <div className="sub-reseach-detail-right" dangerouslySetInnerHTML={{__html:item.right}}>
                </div>
            </div>
        )
    }

    const oneLine = (item) =>{
        return(
            <div className="sub-reseach-detail-one-column" >
                <div className="sub-reseach-detail-title">{item.title}</div>
                {
                    item.contents.map((v,k)=>{
                        return (
                            <div style={{paddingBottom: item.contents.length -1 == k ? '0px' : '150px'}} > {/* last item shouldn't have a margin */}
                                <div className="sub-reseach-detail-subtitle" dangerouslySetInnerHTML={{__html:v.desc}}></div>
                                {   // iterate data in contents...
                                    v.data.map((children, key)=>{
                                        return ( // different render required for picture and string based.
                                            children.role == dataRole.string ? 
                                            oneLineString(children.item) :
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

    const oneLineString = (item) =>{
        return (
            <div className="sub-reseach-detail-1-9-column">
                <div>
                </div>
                <div className="sub-reseach-detail-right" dangerouslySetInnerHTML={{__html:item}}>
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
    
    return (
        <div className="sub-container">
            <div className="sub-title">
                <div className="sub-title-left-panel">
                    {data[props.match.params.id].title.split('\n').map((str, key) => <p key={key}>{str}</p>)}
                </div>
                <div className="sub-title-right-panel">
                    {data[props.match.params.id].titleDescription.map((v, k) => {
                        return <p className={v.isBold ? "bold" : ""} key={k}>{v.text}</p>
                    })}

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
                <div className="sub-research">
                    <p>RESEARCH</p>
                    <div className="sub-reseach-detail">
                        {
                            data[props.match.params.id].contents.map((v,k)=>{
                                return (
                                        <div key={k}>
                                            {renderDependsOnRole(k)}
                                        </div>
                                )

                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}