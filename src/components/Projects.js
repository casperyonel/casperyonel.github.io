import React from 'react'
import YoutubeEmbed from "./video/YoutubeEmbed";


const Projects = () => {
    
    const here = <a href="https://github.com/casperyonel/landing-page-salaries-2" target="_blank">here</a>

    
    return (
        <div>
            <div id="name-title">Projects</div> 
            <p className='p-text long-line Subtitle'>Solidity Landing Page</p>
            <p className='p-text long-line'>I built this website for a company I am looking to build in the near future. The company is a capital generative marketplace that plugs into the backend of employer payroll systems. Our job is to collect investor capital and provide it to employers to pay out salaries to their employees in advance. This way employees of the company can have the flexibility of accessing their entire future salary early. I suspect this to be most used on a 1 or 2 month basis. How much eaiser would the world be if we could get paid just a bit more each paycheck to make paying rent a little bit easier!</p>
            <YoutubeEmbed embedId="EVAz3OATmu8" />
            <ul>
                <p className="Subtitle">Technologies used:</p>
                <li className="list">Javascript</li>
                <li className="list">HTML/CSS</li>
                <li className="list">React</li>
                <li className="list">NodeJS</li>
                <li className="list">Express</li>
                <li className="list">Axios</li>
                <li className="list">Heroku</li>
                <li className="list">PostgreSQL</li>
            </ul>
            <p>Click {here} to check out the GitHub Repo for the project.</p>
        </div>
    )
}

export default Projects