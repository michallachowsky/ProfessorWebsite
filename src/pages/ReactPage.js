import React from 'react'
import './ReactPage.css'

function ReactPage() {
    return (
        <div className='hero-container'>
            <video src='/videos/back.mp4' autoPlay loop muted />
            <img src="notebook.jpg" alt="" className='notebook'/>
            <div className='reactCourse'>
                <h1>React course:</h1>
                <div className='courseDescription'>
                In this course, A Practical Start with React, you will first learn why React is so great. 
                After this module you'll be able to determine if React is for you and/or your team. 
                It will also provide a basic overview of the mechanics of a React app like tree reconciliation and the use of JSX. 
                There's also a brief comparison with alternative libraries and frameworks included. Course is all in English. 
                For the evalution You will have to present project of website, all the details will be given during lectures.
                What we will use during course:
                
                </div>
                <div className='whatweuse'>
                    <img src="reactjs.jpeg" alt="" id="reactjs"/>
                    <img src="html.png" alt="" id="reactjs"/>
                    <img src="vsc.jpg" alt="" id="reactjs"/>
                </div>
            </div>
        </div>
    )
}

export default ReactPage
