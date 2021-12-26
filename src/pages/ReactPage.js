import React from 'react'
import './ReactPage.css'

function ReactPage() {
    return (
        <div className='hero-container'>
            <video src='/videos/back.mp4' autoPlay loop muted />
            <img src="notebook.jpg" alt="" className='notebook'/>
            
        </div>
    )
}

export default ReactPage
