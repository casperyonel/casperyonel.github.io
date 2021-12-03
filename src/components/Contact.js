import React from 'react'

const Contact = () => {
    
    const linkedIn = <a href="https://www.linkedin.com/in/casper-yonel-866993125/" target="_blank">here</a>
    const gitHub = <a href="https://github.com/casperyonel" target="_blank">here</a>

    return (
        <div>
            <div id="name-title">Contact</div> 
            <p className='p-text'>Click {linkedIn} for my LinkedIn.</p>
            <p className='p-text'>Click {gitHub} for my GitHub.</p>
            <p className='p-text'>Or contact me via email: yonelcasper@gmail.com</p>
        </div>
    )
}

export default Contact
