import React from 'react'
import { FaFileVideo } from "react-icons/fa";
import {AiOutlineMessage, AiFillPicture} from 'react-icons/ai'
function LandingPage() {
    return (
        <>
            <div className="app-landing">
                <div style={{textAlign: "center"}}>
                <AiOutlineMessage style={{ fontSize: '4rem' }}/><br />
                <span style={{ fontSize: '2rem' }}>click on chat</span>
                </div>
                <div style={{textAlign: "center"}}>
                <AiFillPicture style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Send Images</span>
                </div>
                <div style={{textAlign: "center"}}>
                <FaFileVideo style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>send videos</span>
                </div>
                
            </div>
            <div style={{ float: 'right' }}>Made By Ahsan Raza</div>
        </>
    )
}

export default LandingPage
