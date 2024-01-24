import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const Header = ({ setHam, ham }) => {
    return (

        <>
            <nav>
                <Navcontent  setHam={setHam}/>
            </nav>
            <button className='navbtn' onClick={() => setHam(!ham)} >
                <GiHamburgerMenu />
            </button>
        </>

    )
}


export const Navmin = ({ham,setHam}) => {
    return (
        <div className={`navmin ${ham ? "navmincall" : ""}`}>
            <Navcontent setHam={setHam}/>
        </div>
    )
}




const Navcontent = ({setHam}) => {
    return (

        <>
            <h2>Anas.</h2>
            <div id="nv">
                <a href="#home" onClick={() => setHam(false)} >Home</a>
                <a href="#work"  onClick={() => setHam(false)}>Work</a>
                <a href="#timeline"  onClick={() => setHam(false)}>About </a>
                <a href="#skills"  onClick={() => setHam(false)}>Skills </a>
                <a href="#services"  onClick={() => setHam(false)}>Services</a>
                <a href="#contact"  onClick={() => setHam(false)}>Contact</a>
            </div>
            <a href="mailto:anasahmedd224@gmail.com">
                <button>Email</button>
            </a>


        </>
    )
}

export default Header
