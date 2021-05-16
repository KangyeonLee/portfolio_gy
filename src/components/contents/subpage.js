import react, { useEffect, useState } from 'react'
import '../../css/subpage.css'

export default function SubPage(props){
    const columnRole = Object.freeze({"oneColumn":1,"twoColumn":2,"grid":3,"center":4,"bisymetry":5})
    const dataRole = Object.freeze({"string":1,"image":2,"images":3})
    const [data, setData] = useState([
        {
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
                        left:"GOAL",
                        right:`The following criteria were identified for the dashboard design.<br/><br/>
                        <b>01. Optimize the UI to help users quickly find each process properly<br/><br/>
                        02. Update the layout improves administrators add each working section conveniently<br/><br/>
                        03. Update the UI and visual style to improve the readability and brand identity</b>`
                    },
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
                    {
                        role:columnRole.oneColumn,
                        title:"DESIGN PROTOTYPE",
                        contents:[
                            {
                                desc:``,
                                data:[
                                    {role:dataRole.image, item:`/images/pr1/proto_web01.png`}
                                ]
                            }
                        ]
                    },
                    {
                        role:columnRole.center,
                        title:"Main Page Dashboard",
                        contents:`Each menu configures to be visible at a glance on the main page. The menu designs to be easier to figure and recognize through icons.`
                    },
                    {
                        role:columnRole.grid,
                        column:2,
                        title:"For admin",
                        items:[
                            {item:"/images/pr1/proto_web01.png", class:""},
                            {item:"/images/pr1/proto_web02.png", class:""},
                            {item:"/images/pr1/proto_web03.png", class:""},
                            {item:"/images/pr1/proto_web04.png", class:""},
                        ]
                    },
                    {
                        role:columnRole.center,
                        title:"Dashboard Admin Page",
                        contents:`Dashboard administrators can manage the entire menu which the user registration, customer operation centers, and view questions, answers, and schedule registration.`
                    },
                    {
                        role:columnRole.grid,
                        column:2,
                        title:"For Supervisor",
                        items:[
                            {item:"/images/pr1/proto_web06.png", class:""},
                            {item:"/images/pr1/proto_web07.png", class:""},
                            {item:"/images/pr1/proto_web08.png", class:""},
                            {item:"/images/pr1/proto_web09.png", class:""},
                        ]
                    },
                    {
                        role:columnRole.center,
                        title:"Manage Schedule for Supervisor",
                        contents:`Can add the process manage schedule, can manage the work status of each employee. Also, can check each production line and faulty can be checked immediately.`
                    },
                    {
                        role:columnRole.grid,
                        column:2,
                        title:"For Employees",
                        items:[
                            {item:"/images/pr1/proto_web10.png", class:""},
                            {item:"/images/pr1/proto_web11.png", class:""},
                            {item:"/images/pr1/proto_web12.png", class:""},
                            {item:"/images/pr1/proto_web13.png", class:""},
                        ]
                    },
                    {
                        role:columnRole.center,
                        title:"Check the Own Process",
                        contents:`Employees can check the production status of production lines immediately through the dashboard shown on the monitor.`
                    },
                    {
                        role:columnRole.bisymetry,
                        title:"Mobile",
                        contents:[
                            {
                                left:"<video muted autoplay loop><source src='/images/pr1/proto_mobile01.mov'/></video>",
                                right:`<b>Intro and Sign Up</b><br/><br/>During the sign-up process, the user will divide into supervisor and employee. Assign their own employee number to the user in this step.`
                            },
                            {
                                left:`<b>Main Page and Navigation</b><br/><br/>Each employee can only check the work status of their production line. In the case of a supervisor, there is a menu where they can register the order status or work status, but ordinary factory employees can only check the work status.`,
                                right:`<video muted autoplay loop><source src='/images/pr1/proto_mobile02.mov'/></video>`
                            },
                            {
                                left:`<img src='/images/pr1/proto_mobile03.gif'/>`,
                                right:`<b>Total Quality Management</b><br/><br/>Check and register the insufficient quantity of materials and production parts, the completion time of test report or production, and verification processing (menu available for supervisor).`
                            },
                            {
                                left:`<b>Manage OrderList</b><br/><br/>Can order subsidiary materials requirements for the production line, and register and verify detailed information on the order and the product produced (etc. bag).`,
                                right:`<img src='/images/pr1/proto_mobile04.gif'/>`
                            },
                            {
                                left:`<img src='/images/pr1/proto_mobile05.gif'/>`,
                                right:`<b>My Page and Check Incentive</b><br/><br/>Check the holidays, absence from work, sick leave, and performance-based payment the detail, and may check problems, penalty points, and alarms of the employee's part.`
                            }
                        ]
                    },
                ]
            },
            {
                title:"CONCLUSION & REFLECTION",
                contents:[
                    {
                        role:columnRole.oneColumn,
                        title:"",
                        contents:[
                            {
                                desc:``,
                                data:[
                                    {role:dataRole.image, item:`/images/pr1/conclusion.png`}
                                ]
                            }
                        ]
                    },
                    {
                        role:columnRole.center,
                        title:"Learning from the users",
                        class:"conclusion-title",
                        contents:`I’m proud of what I’ve achieved; I’ve designed this manufacturing solution system to improve the process and material management. As seen in the map above, each production line is extremely complicated. However, I’ve successfully designed the dashboard to match the user-friendly demands, despite the extreme complexity of the management process for the staff who need to quickly check production status and designed a readable and understandable design that can take as little time to figure out the menu as possible. The rate of production at the level increased 23 percent with the implementation of this new system.`
                    },
                ]
            },
        ]

    },
    {
        title:`HEIDI WEBSITE`,
        titleDescription:`This web app <b>promotes the <br/>
        manufacturing system</b> that <br/>
        helps employees operate <br/>
        process management systems <br/>
        more efficiently and save time.`,
        titleImage:"/images/pr2/heidi_website_hero.jpg",
        properties:[
            {type:"PROJECT TYPE",data:["Desktop"]},
            {type:"ROLE",data:["Project designer"]},
            {type:"KEY SKILLS",data:["Concept Ideation","Visual Design","UI design","Project Management"]},
            {type:"TIMELINE",data:["Apr 2016"]},
        ],
        sections:[{
            title:"INTRODUCTION",
            contents:[
                {
                    role:columnRole.twoColumn,
                    left:"PROJECT OVERVIEW",
                    right:`HEIDI's business is a service that provides manufacturing solutions to help the factory increase production speed further. I designed a new website to promote HEIDI's solution system.`
                },
                {
                    role:columnRole.twoColumn,
                    left:"THE PROBLEM",
                    right:`<b>How can we visualize what Heidi's can do to their customers?</b><br/>
                    There are so many benefits of the process management system that can be a very long text to explain. Also, there is too much information it’s nearly impossible to explain the entirety of the solution system functions.`
                },
                {
                    role:columnRole.twoColumn,
                    left:"OBJECTIVE",
                    right:`<b>Describe Features that Easy to Understand</b><br/><br/>
                    I’ve decided to design a dashboard that efficiently checks out the employee's working status on each section quickly, easy to control. Visualizing the organizing total working process procedure can be brought about by reducing the working time.`
                }
                ]
            },
            {
                title:"DESIGN DEVELOPMENT",
                contents:[
                    {
                        role:columnRole.twoColumn,
                        left:"HEIDI SITEMAP PROPOSAL",
                        right:`Mapping out primary and secondary pages to design that the page was organized focusing on explanations of the unfamiliar industry process management, industry support pages, introductions to HEIDI companies, and descriptions of the process.`
                    },
                    {
                        role:columnRole.oneColumn,
                        title:"",
                        contents:[
                            {
                                desc:`<b>01. Primary page - Main page </b><br/><br/>
                                The brief overview and introduction of HEIDI's products also intrigue the user's interest.<br/><br/>
                                <b>02. Secondary pages - Products, About, Etc.</b><br/><br/>
                                An accurate description of the business, detailed description of the solution system, supporting page.`,
                                data:[
                                    
                                ]
                            }
                        ]
                    },
                    {
                        role:columnRole.oneColumn,
                        title:"",
                        contents:[
                            {
                                desc:``,
                                data:[
                                    {role:dataRole.image, item:`/images/pr2/sitemap.png`}
                                ]
                            }
                        ]
                    },
                    {
                        role:columnRole.twoColumn,
                        left:"WIREFRAMING",
                        right:`For the final design, we made the wireframe as detailed as possible.`
                    },
                    {
                        role:columnRole.oneColumn,
                        title:"",
                        contents:[
                            {
                                desc:``,
                                data:[
                                    {role:dataRole.image, item:`/images/pr2/wireframe.jpg`}
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                title:"FINAL DESIGN",
                contents:[
                    {
                        role:columnRole.twoColumn,
                        left:"GOAL",
                        right:`The following criteria were identified for the HEIDI Website<br/><br/>
                        <b>01. Update the UI and visual style to improve the readability and brand identity<br/><br/>
                        02. Optimize the page design to help users quickly understand each business of Heidi<b/>`
                    },
                    {
                        role:columnRole.twoColumn,
                        left:"THE SOLUTION",
                        right:`<b>Emphasize a service</b><br/>
                        Designing a site that can summarize HEIDI's business at a glance was the focal point. Stressing on visual images for comprehending their platform rather than texts.`
                    },
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
                            {item:"/images/pr2/01 COLOR.jpg", class:""},
                            {item:"/images/pr2/02 FONT.jpg", class:""},
                        ]
                    },
                    {
                        role:columnRole.grid,
                        column:3,
                        title:"HIGH FIDELITY MOCKUP",
                        items:[
                            {item:"/images/pr2/sub01.jpg", class:""},
                            {item:"/images/pr2/sub02.jpg", class:""},
                            {item:"/images/pr2/sub03.jpg", class:""},
                            {item:"/images/pr2/sub05.jpg", class:""},
                            {item:"/images/pr2/sub06.jpg", class:""},
                            {item:"/images/pr2/sub07.jpg", class:""},
                            {item:"/images/pr2/sub08.jpg", class:""},
                            {item:"/images/pr2/sub09.jpg", class:""},
                            {item:"/images/pr2/sub10.jpg", class:""},
                            {item:"/images/pr2/sub11.jpg", class:""},
                            {item:"/images/pr2/sub13.jpg", class:""},
                            {item:"/images/pr2/sub15.jpg", class:""},
                        ]
                    },
                    {
                        role:columnRole.twoColumn,
                        left:"DESIGN PROTOTYPE",
                        right:``
                    },
                    {
                        role:columnRole.bisymetry,
                        title:"",
                        contents:[
                            {
                                left:"<img src='/images/pr2/prototype01.gif'/>",
                                right:`<b>Simplify Main Page</b><br/><br/>
                                A brief introduction to the HEIDI project and an overall functional description of the process management system.`
                            },
                            {
                                left:`<b>Explain Business</b><br/><br/>
                                Help users be aware of the reason why HEIDI's business is needed and the convenience and benefits of the production system it will bring.`,
                                right:`<img src='/images/pr2/prototype02.gif'/>`
                            },
                            {
                                left:"<img src='/images/pr2/prototype03.gif'/>",
                                right:`<b>Description Management System</b><br/><br/>
                                Explains the detailed feature of the process management system and the role of each menu to the user. It refers to dashboard images and descript the feature convenient to users using visual assist.`
                            },
                            {
                                left:`<b>About HEIDI</b><br/><br/>
                                It is a page that shows users about HEIDI's corporate ideology and company.`,
                                right:`<img src='/images/pr2/prototype04.gif'/>`
                            },
                            {
                                left:"<img src='/images/pr2/prototype05.gif'/>",
                                right:`<b>Support Pages</b><br/><br/>
                                It is a page that runs a customer center and questions about business features.`
                            }
                        ]
                    },
                ]
            }     
        ]

    },
    {
        title:`adKnowva<br/>MANAGEMENT<br/>SYSTEM`,
        titleDescription:`This web application is <br/>
        <b>managed revenue and <br/>
        controlled by adding <br/>
        advertisement</b> that the web, <br/>
        mobile, and apps' <br/>
        advertisement business.`,
        titleImage:"/images/pr3/adknowva_dashboard_hero.jpg",
        properties:[
            {type:"PROJECT TYPE",data:["Desktop"]},
            {type:"ROLE",data:["Project designer"]},
            {type:"KEY SKILLS",data:["Concept Ideation","Visual Design","UI/UX design","Project Management"]},
            {type:"TIMELINE",data:["Oct - Nov 2017"]},
        ],
        sections:[{
            title:"RESEARCH",
            contents:[
                {
                    role:columnRole.twoColumn,
                    left:"PROJECT OVERVIEW",
                    right:`This web application is managed and controlled that the web, mobile, and apps' advertisement business. The clients could be used as a dashboard to manage each advertisement or apps, distinguish statistics, and can check the profit of advertisements. This web application is managed revenue and controlled by adding advertisement that the web, mobile, and apps' advertisement business.`
                },
                {
                    role:columnRole.twoColumn,
                    left:"THE PROBLEM",
                    right:`<b>1. Even if it's the same advertisement, the size and number of advertisements are different for each mobile device<br/><br/>
                    2. Difficult to distinguish what size of advertisements from each client request</b><br/><br/>
                    When managing the advertisements, in the existing system, there was difficulty distinguishing advertisement which is from each client. Each client provides various advertisements. Additionally, the resolution sizes of mobile devices vary widely, requiring distinction of data from advertising management by size and client-specific to profit aggregation.
                    
                    
                    
                    
                    `
                },
                {
                    role:columnRole.oneColumn,
                    title:"NEED-FINDING",
                    contents:[
                        {
                            desc:`<b>01. Interview and Profiles</b><br/><br/>
                            I’ve set up an interview with advertisement client’s workers, to investigate their pain points.`,
                            data:[
                                {
                                    role:dataRole.string, 
                                    image:"/images/pr1/face3.png",
                                    item:`<b>Client’s worker:</b> He manages advertisements for mobile devices and advertisements on websites. However, after registering advertisements, it is too difficult to recognize which device the ad is on for each size. Also, It is too complicated to check out the profits from online advertising.`
                                },
                            ]
                        },
                        {
                            desc:`<b>02. Target User Analysis</b><br/><br/>
                            I Based on the interview and analysis working status of factories, I found that our main stakeholder is the supervisor who manages all the production lines with each material part and each employee at each part also found that they needed a different solution than the supervisor.`,
                            data:[]
                        }
                    ]
                },
                {
                    role:columnRole.twoColumn,
                    left:"USER PERSONA",
                    right:`This persona is a fictional character created in representing a user type that might be a supervisor or employees in a similar way.`
                },
                {
                    role:columnRole.oneColumn,
                    title:"",
                    contents:[
                        {
                            desc:``,
                            data:[
                                {role:dataRole.image, item:`/images/pr3/userPersona.png`}
                            ]
                        }
                    ]
                },
                {
                    role:columnRole.twoColumn,
                    left:"THE SOLUTION",
                    right:`<b>Designing a Dashboard</b><br/><br/>
                    I’ve designed a dashboard that efficiently checks out the employee's working status on each section quickly, easy to control. Visualizing the organizing total working process procedure was able to boost efficiency`
                },
            ]},
            {
                title:"DESIGN DEVELOPMENT",
                contents:[
                    {
                        role:columnRole.twoColumn,
                        left:"USER JOURNEY MAP",
                        right:`Based on the work status, the information hierarchy has two main parts: Home(dashboard), Profile, more five manage parts: Faulty Report, Test Report, Process, Manage Product Samples, and Order Lists.`
                    },
                    {
                        role:columnRole.oneColumn,
                        title:"",
                        contents:[
                            {
                                desc:``,
                                data:[
                                    {role:dataRole.image, item:`/images/pr3/journeyamp.png`}
                                ]
                            }
                        ]
                    },
                    {
                        role:columnRole.twoColumn,
                        left:"LOW FIDELITY WIREFRAME",
                        right:`I designed two types of dashboard that manage advertisements by clients and the system that can be controlled by the system developer.`
                    },
                    {
                        role:columnRole.grid,
                        column:3,
                        title:"",
                        items:[
                            {item:"/images/pr3/ad_dashboard01.png", class:""},
                            {item:"/images/pr3/ad_dashboard02.png", class:""},
                            {item:"/images/pr3/ad_dashboard03.png", class:""},
                            {item:"/images/pr3/ad_dashboard04.png", class:""},
                            {item:"/images/pr3/ad_dashboard05.png", class:""},
                            {item:"/images/pr3/ad_dashboard06.png", class:""},
                            {item:"/images/pr3/ad_dashboard07.png", class:""},
                            {item:"/images/pr3/ad_dashboard08.png", class:""},
                            {item:"/images/pr3/ad_dashboard09.png", class:""},
                            {item:"/images/pr3/ad_dashboard10.png", class:""},
                            {item:"/images/pr3/ad_dashboard11.png", class:""},
                            {item:"/images/pr3/ad_dashboard12.png", class:""},
                            {item:"/images/pr3/ad_dashboard13.png", class:""},
                            {item:"/images/pr3/ad_dashboard14.png", class:""},
                            {item:"/images/pr3/ad_dashboard15.png", class:""},
                            {item:"/images/pr3/ad_dashboard16.png", class:""},
                            {item:"/images/pr3/ad_dashboard17.png", class:""},
                            {item:"/images/pr3/ad_dashboard18.png", class:""},
                            {item:"/images/pr3/ad_dashboard19.png", class:""},
                            {item:"/images/pr3/ad_dashboard20.png", class:""},
                            {item:"/images/pr3/ad_dashboard21.png", class:""},
                        ]
                    },
                ]
            },
            {
                title:"FINAL DESIGN",
                contents:[
                    {
                        role:columnRole.twoColumn,
                        left:"GOAL",
                        right:`I’ve identified the following criteria to improve managing advertisement.<br/><br/>
                        <b>01. Optimize the UI to help users quickly find each devices' advertisements of clients<br/><br/>
                        02. Update the layout improves administrators add each advertisement conveniently<br/><br/>
                        03. Update the UI and visual style to improve the readability and brand identity</b>`
                    },
                    {
                        role:columnRole.twoColumn,
                        left:"FINAL DESIGN PROTOTYPE",
                        right:``
                    },
                    {
                        role:columnRole.oneColumn,
                        title:"",
                        contents:[
                            {
                                desc:``,
                                data:[
                                    {role:dataRole.image, item:`/images/pr3/proto01.png`}
                                ]
                            }
                        ]
                    },
                    {
                        role:columnRole.center,
                        title:"Dashboard Main Page",
                        class:"",
                        contents:`Approximate statistical revenue status and on/off of ongoing advertisements by the clients can be executed immediately.`
                    },
                    {
                        role:columnRole.grid,
                        column:2,
                        title:"",
                        items:[
                            {item:"/images/pr3/proto02.png", class:""},
                            {item:"/images/pr3/proto03.png", class:""},
                        ]
                    },
                    {
                        role:columnRole.center,
                        title:"Manage Clients",
                        class:"",
                        contents:`This page manages the list of all advertising partners or clients that are currently managing. Also, register advertisements for each device, such as the online web, mobile web, or apps.`
                    },
                    {
                        role:columnRole.grid,
                        column:2,
                        title:"",
                        items:[
                            {item:"/images/pr3/proto04.png", class:""},
                            {item:"/images/pr3/proto05.png", class:""},
                        ]
                    },
                    {
                        role:columnRole.center,
                        title:"Check Advertisements Statistics",
                        class:"",
                        contents:`Set each client ad type by time period to show statistics on the number of clicks and exposures. Revenue is determined by the count of exposure to ads, check the count of exposure and think about where to reposition online advertisements.`
                    },
                    {
                        role:columnRole.grid,
                        column:2,
                        title:"",
                        items:[
                            {item:"/images/pr3/proto06.png", class:""},
                            {item:"/images/pr3/proto07.png", class:""},
                        ]
                    },
                    {
                        role:columnRole.center,
                        title:"Check Revenue",
                        class:"",
                        contents:`The revenue of each advertiser can check on daily, monthly and yearly. It is highlighted in a graph to make it easy to see. Additionally, statistics on how much Internet users clicked on ads for the client also appear and shown on the graph.`
                    },
                    {
                        role:columnRole.grid,
                        column:2,
                        title:"",
                        items:[
                            {item:"/images/pr3/proto08.png", class:""},
                            {item:"/images/pr3/proto09.png", class:""},
                        ]
                    },
                    {
                        role:columnRole.center,
                        title:"Add and Check Any Size of Advertisements",
                        class:"",
                        contents:`A detailed management page for ads where advertisers can register ads on the page they want. Also, you can preview the advertisements they would like to register in the size they set it as, and they can also set how much of the advertisement they designated will be exposed to.`
                    },
                    {
                        role:columnRole.grid,
                        column:2,
                        title:"",
                        items:[
                            {item:"/images/pr3/proto10.png", class:""},
                            {item:"/images/pr3/proto11.png", class:""},
                        ]
                    },
                    {
                        role:columnRole.center,
                        title:"Support Users",
                        class:"",
                        contents:`Each managed client can post questions about advertising registration, revenue calculation, and statistics to dashboard developers and get answers accordingly.`
                    },
                ]
            },    
        ]


    },
    {
        title:`WEB-NOVEL VIEWER<br/>WEBSITE`,
        titleDescription:`This web application <b>provides a viewer for web-novels.</b> Users can join that site through this site, as well as the users can manage and readable the books and web-novels what are they save up or purchase.`,
        titleImage:"/images/pr4/webnovel_hero.jpg",
        properties:[
            {type:"PROJECT TYPE",data:["Desktop/Mobile"]},
            {type:"ROLE",data:["Project designer"]},
            {type:"KEY SKILLS",data:["Concept Ideation","Visual Design","UI/UX design","Project Management"]},
            {type:"TIMELINE",data:["May - Jun 2016"]},
        ],
        sections:[{                    
                title:"RESEARCH",
                contents:[
                    {
                        role:columnRole.twoColumn,
                        left:"PROJECT OVERVIEW",
                        right:`This web application provides a viewer function for web-novels. Users can join that site through this site, as well as the users can manage and readable the books and web-novels what are they save up or purchase.`
                    },
                    {
                        role:columnRole.twoColumn,
                        left:"THE PROBLEM",
                        right:`<b>Require an environment where you can read books not only with mobile devices but also with a desktop or laptop</b><br/><br/>
                        It should be possible for users to feel that they are reading a book, not just reading for an Internet article. There is also a risk that reading a book with devices for a long time might be lead to weakened.`
                    },
                    {
                        role:columnRole.oneColumn,
                        title:"FLOW ANALYSIS",
                        contents:[
                            {
                                desc:`<b>01. Interview and Profiles</b><br/><br/>
                                I’ve conducted interviews with 2 other web novel users, including 2 people who usually enjoy reading novels consistently. I’ve asked them questions to identify their pain points.`,
                                data:[
                                    {
                                        role:dataRole.string, 
                                        image:"/images/pr4/face1.png",
                                        item:`<b>Book Reader:</b> It is often overwhelming to carry thick and heavy books as well it is hard to store increasing books in the house.`
                                    },
                                    {
                                        role:dataRole.string, 
                                        image:"/images/pr4/face2.png",
                                        item:`<b>Web Novel Reader:</b> It has been using other platforms or apps. However, those are uncomfortable that there are no detail functions to set for the viewer when reading a book.`
                                    },
                                ]
                            },
                            {
                                desc:`<b>02. Analysis of Demand from User</b><br/><br/>
                                I’ve gathered some key problems from the above interviews.`,
                                data:[]
                            },
                            {
                                desc:``,
                                data:[
                                    {
                                        role:dataRole.images, 
                                        items:[
                                            {
                                                src:"/images/pr4/icon01.png",
                                                desc:"Overwhelming to <br/>carry the heavy books"
                                            },
                                            {
                                                src:"/images/pr4/icon02-2.png",
                                                desc:"Difficult to store <br/>many books"
                                            },
                                            {
                                                src:"/images/pr4/icon03.png",
                                                desc:"Require to set <br/>detail of viewer"
                                            }
                                        ]
                                    },
                                ]
                            },
                            
                        ]
                    },
                    {
                        role:columnRole.twoColumn,
                        left:"THE SOLUTION",
                        right:`<b>Designing a Convenient Readable Viewer</b><br/><br/>
                        I’ve designed a viewer that the users are available to read books comfortably and at any time on their mobile devices. The user can also set the viewer as desired to set up the character size, screen colour, and whether to set up the character's dialogue which appears to match their illustration.`
                    },
                ]
            },
            {                    
                title:"USER PERSONA",
                contents:[
                    {
                        role:columnRole.twoColumn,
                        left:"OVERVIEW",
                        right:`This persona is a fictional character created in representing a user type that might be a supervisor or employees in a similar way.`
                    },
                    {
                        role:columnRole.oneColumn,
                        title:"",
                        contents:[
                            {
                                desc:``,
                                data:[
                                    {role:dataRole.image, item:`/images/pr4/persona 01.png`},
                                    {role:dataRole.image, item:`/images/pr4/persona 02.png`}
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
                        left:"SITEMAP PROPOSAL",
                        right:`Mapping out primary and secondary pages to design that the main page is a summary listing of favourite novels of each genre, manage e-book storage of user, and viewer page.`
                    },
                    {
                        role:columnRole.oneColumn,
                        title:"",
                        contents:[
                            {
                                desc:`<b>01. Primary page - Main page</b><br/><br/>
                                A list of attractive novels related thumbnails to draw the user's curiosity.<br/><br/>
                                <b>02. Secondary pages - Ranking, Today’s pick, Publish, Etc.</b><br/><br/>
                                An accurate description of the business, detailed description of the solution system, supporting page.`,
                                data:[
                                    
                                ]
                            }
                        ]
                    },
                    {
                        role:columnRole.oneColumn,
                        title:"",
                        contents:[
                            {
                                desc:``,
                                data:[
                                    {role:dataRole.image, item:`/images/pr4/sitemap.png`},
                                ]
                            }
                        ]
                    },
                    {
                        role:columnRole.twoColumn,
                        left:"USER JOURNEY MAP",
                        right:`The information hierarchy to three main parts: Home(list), My page, more novel list parts: each section novel lists.`
                    },
                    {
                        role:columnRole.oneColumn,
                        title:"",
                        contents:[
                            {
                                desc:``,
                                data:[
                                    {role:dataRole.image, item:`/images/pr4/journeyMap.png`},
                                ]
                            }
                        ]
                    },
                    {
                        role:columnRole.twoColumn,
                        left:"LOW FIDELITY WIREFRAME",
                        right:`Two types of designs for both desktop and mobile for the web-novel users.`
                    },
                    {
                        role:columnRole.grid,
                        column:2,
                        title:"Desktop",
                        items:[
                            {item:"/images/pr4/lowFi01_1.png", class:""},
                            {item:"/images/pr4/lowFi01_2.png", class:""},
                            {item:"/images/pr4/lowFi01_3.png", class:""},
                            {item:"/images/pr4/lowFi01_4.png", class:""},
                            {item:"/images/pr4/lowFi01_5.png", class:""},
                        ]
                    },
                    {
                        role:columnRole.grid,
                        column:4,
                        title:"Desktop",
                        items:[
                            {item:"/images/pr4/01.png", class:""},
                            {item:"/images/pr4/02.png", class:""},
                            {item:"/images/pr4/03.png", class:""},
                            {item:"/images/pr4/04.png", class:""},
                            {item:"/images/pr4/05.png", class:""},
                            {item:"/images/pr4/06.png", class:""},
                            {item:"/images/pr4/07.png", class:""},
                            {item:"/images/pr4/08.png", class:""},
                            {item:"/images/pr4/09.png", class:""},
                            {item:"/images/pr4/10.png", class:""},
                            {item:"/images/pr4/11.png", class:""},
                            {item:"/images/pr4/12.png", class:""},
                        ]
                    },
                ]
            },
            {                    
                title:"FINAL DESIGN",
                contents:[
                    {
                        role:columnRole.twoColumn,
                        left:"GOAL",
                        right:`I identified below things I could do to design the web-novel viewer.<br/><br/>
                        <b>1. Optimize the UI to help users quickly find each devices' advertisements of clients<br/><br/>
                        2. Update the layout improves administrators add each advertisement conveniently<br/><br/>
                        3. Update the UI and visual style to improve the readability and brand identity
                        </b>
                        `
                    },
                    {
                        role:columnRole.twoColumn,
                        left:"STYLE GUIDE",
                        right:`Establishing color, font, and typographic scales on each different breakpoints. This guide is useful to act as a reference for a developer to transform the design into reality in code. below things I could do to design the dashboard.`
                    },
                    {
                        role:columnRole.grid,
                        column:2,
                        title:"Desktop",
                        items:[
                            {item:"/images/pr4/01 COLOR.jpg", class:""},
                            {item:"/images/pr4/02 FONT.jpg", class:""},
                            {item:"/images/pr4/03 BUTTON.jpg", class:""},
                            {item:"/images/pr4/03 BUTTON_web.jpg", class:""},
                            {item:"/images/pr4/05 TAB .jpg", class:""},
                            {item:"/images/pr4/05 TAB_web.jpg", class:""},
                        ]
                    },
                ]
            },
            {                    
                title:"CONCLUSION & REFLECTION",
                contents:[
                    {
                        role:columnRole.center,
                        title:"Be in the user's shoes",
                        class:"conclusion-title",
                        contents:`In this project, I researched the feedback from each type of user. Also, I was in the position of the one user. I tried to design this project so the user can have a better experience while reading the novels on their devices. As a result, the viewer is the main feature that could change fluidly according to each user's vision and preference and added visual element that may not lose its identity. Users will be able to recall the feeling of paper books while reading the novel at this site.`
                    },
                ]
            }

        ]
    }   
])

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
            case columnRole.center:
                return center(content)
            case columnRole.bisymetry:
                return bisymetry(content)
        }
    }

    const renderDependsOnRoleForSub = (content, key) => {
        switch(content.role){
            case dataRole.string:
                return oneLineString(content.image, content.item)
            case dataRole.image:
                return oneLinePicture(content.item, key)
            case dataRole.images:
                return oneLinePicturesWithDesc(content)
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
                                            renderDependsOnRoleForSub(children, key)
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

    const oneLinePicture = (item, key)=>{
        return ( // picture needs to be centerized
            <div>
                <img src={item} style={{maxWidth:'800px', width:'100%', display:'block', margin:'0 auto', paddingTop: key!=0 ?'50px' : ""}}/>
            </div>
        )
    }

    const oneLinePicturesWithDesc = (content)=>{
        return (
            <div className="sub-section-detail-images-container">
                {
                    content.items.map((item,key)=>{
                        return (
                            <div className="sub-section-detail-images-item" key={key}>
                                <img src={item.src}/>
                                <div dangerouslySetInnerHTML={{__html:item.desc}}/>
                            </div>
                        )
                    })
                }
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

    const center = (item) =>{
        return(
            <div className="sub-section-center">
                <div className={`sub-section-center-title ${item.class}`}>{item.title}</div>
                <div className="sub-section-center-contents">{item.contents}</div>
            </div>
        )
    }

    const bisymetry = (item) =>{
        return (
            <div className="sub-section-bisymetry">
                <div className={`sub-section-bisymetry-title`}>{item.title}</div>
                <div className="sub-section-bisymetry-contents">
                    {
                        item.contents.map((content,key)=>{
                            return(
                                <div className="sub-section-bisymetry-content">
                                    <div className={`sub-section-left ${key%2==1 ?"sub-section-vertical-center":""}`}>
                                        <div dangerouslySetInnerHTML={{__html:content.left}} />
                                    </div>
                                    <div className={`sub-section-right ${key%2==0 ?"sub-section-vertical-center":""}`}>
                                        <div dangerouslySetInnerHTML={{__html:content.right}} />
                                    </div>
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
                                {
                                    data[props.match.params.id].sections.length -1 != key && <hr/>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}