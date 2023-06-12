import '/src/styles/navbar.css'
import {HiMenuAlt3} from "react-icons/hi"
function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar_logo'>
            {/* <img src='/src/assets/react.svg' alt='logo'/> */}
            <h1>SURGE</h1>
        </div>
        <div className='nav-items'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Vision</a></li>
                <li><a href='#'>Team</a></li>
                <li><button className='get-started-btn'>Get Started</button></li>
            </ul>
          <div className='nav-items-mobile'>
            <HiMenuAlt3 className='menu'/>
            <ul>
                <li href="#">Home</li>
                <li href="#">Vision</li>
                <li href="#">Team</li>
                <li href="#">Services</li>
                <li><button className='get-started-btn'>Get Started</button></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar
