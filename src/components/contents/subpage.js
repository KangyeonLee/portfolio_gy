import react, { useState } from 'react'
import '../../css/subpage.css'

export default function SubPage(props){
    const [data, setData] = useState([{
        title:`HEIDI\nMANUFACTURING\nSOLUTION SYSTEM`,
        titleDescription:[
            {text:"This web app that dashboard",isBold:false},
            {text:"helps employees operate",isBold:false},
            {text:"process management systems ",isBold:true},
            {text:"more efficiently and save time",isBold:true},
            {text:"as well as it promotes through ",isBold:false},
            {text:"the own website.",isBold:false}],
        titleImage:"/images/02 heidi__website_thumb.jpg",
        properties:[
            {type:"PROJECT TYPE",data:["Web app/app design"]},
            {type:"ROLE",data:["Project designer","Projuect sub manager"]},
            {type:"KEY SKILLS",data:["Concept Ideation","Visual Design","Prototyping","UI/UX design","Project Management"]},
            {type:"TIMELINE",data:["Oct 2015 - Mar 2016"]},
    ],

    }])
    console.log()
    return (
        <div className="sub-container">
            <div className="sub-title">
                <div className="sub-title-left-panel">
                    {data[props.match.params.id].title.split('\n').map((str, key) => <p key={key}>{str}</p>)}
                </div>
                <div className="sub-title-right-panel">
                    {data[props.match.params.id].titleDescription.map((v, k) => {
                        return <p className={v.isBold ? "bold" : ""}>{v.text}</p>
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
                                <div className="sub-project-properties-item">
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
                        
                    </div>
                </div>
            </div>
        </div>
    )
}