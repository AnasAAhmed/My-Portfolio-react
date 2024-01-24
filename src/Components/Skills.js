import React, { useState } from 'react'
import { skillsothers, skillsF, skillsback } from '../assets/data'
import '../Styles/skills.scss'

const Skills = () => {
    const [skilldata, setSkilldata] = useState(skillsF)
    const [active1, setActive1] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)

    const onClick1 = () => {
        setActive1(true)
        setActive2(false)
        setActive3(false)
        setSkilldata(skillsF)
    }
    const onClick2 = () => {
        setActive1(false)
        setActive3(false)
        setActive2(true)
        setSkilldata(skillsback)
    }
    const onClick3 = () => {
        setActive1(false)
        setActive2(false)
        setActive3(true)
        setSkilldata(skillsothers)
    }


    return (
        <div id="skills" >
            <div className="Ssdection" >
            <h2 className="hsdead2">Skills</h2>
                <ul className="nav nav-pills d-flex justify-content-center">
                    <li className="nav-item">
                        <button className={`skillbtn ${active1 ? "skillactive" : ""}`} aria-current="page" onClick={onClick1}>Tab1</button>
                    </li>
                    <li className="nav-item">
                        <button className={`skillbtn ${active2 ? "skillactive" : ""}`} onClick={onClick2} >Tab2</button>
                    </li>
                    <li className="nav-item">
                        <button className={`skillbtn ${active3 ? "skillactive" : ""}`} onClick={onClick3}>Tab3</button>
                    </li>
                    </ul>
                <div className="CsdarouselContainer" >
                    {skilldata.map(({ icon, skill, width, level, id }) => (
                        <div className="CsdarouselsItem" key={id} >
                            {icon}
                            <span className="CarouselsItemText mx-2">{skill}</span>
                            <div className="progress mx-2 my-2" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar " style={{ width: `${width}%` }}>{level}%</div>
                            </div>
                        </div>
                    ))}

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Skills
