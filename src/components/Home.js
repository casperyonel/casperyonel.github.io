import { Link } from 'react-router-dom'
import profilePhoto from "../profilePhoto2.png"

const Home = () => {
    
    const here = <Link to='/contact'>here</Link>
    
    return (
        <div className="Home">
            <div className="Home-Container">
                
                <img src={profilePhoto} alt="" id="profile-photo" />
                <div id="name-title">Casper Yonel</div>
                <p className='p-text'>Hello! Welcome to my website.</p>
                <p className='p-text long-line'>I'm a passionate 23 year old looking to start companies and build products that better and move the world forward.</p>
                <p className='p-text long-line'>I studied finance at Penn State University, and have worked at J.P. Morgan, Citi, and Point72 Asset Management.</p>
                <p className='p-text' >If you'd like to get in contact, please click {here}</p>
            </div>
        </div>
    )
}

export default Home