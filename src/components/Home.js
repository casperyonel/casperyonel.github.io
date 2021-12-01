import { Link } from 'react-router-dom'

const Home = () => {
    
    const here = <Link to='/contact'>here</Link>
    
    return (
        <div className="Home">
            <div className="Home-Container">
                <div id="name-title">Casper Yonel</div>
                <p className='p-text'>Hello! Welcome to my website.</p>
                <p className='p-text'>I'm a passionate 23 year old looking to start companies and build products that better the world.</p>
                <p className='p-text long-line'>I studied finance at Penn State University, and have worked at J.P. Morgan, Citi, and Point72 Asset Management.</p>
                <p className='p-text' >If you'd like to get in contact, please click {here}</p>
            </div>
        </div>
    )
}

export default Home
