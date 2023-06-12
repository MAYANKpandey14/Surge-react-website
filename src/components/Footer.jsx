import '/src/styles/Footer.css'
import {} from 'react-icons/'

function Footer() {
  return (
    <div className='footer'>
        <div className='info'>
            <h1>SURGE</h1>
            <p>Modern-age Digital Marketing Company to providing every brand  digital presence using cutting-edge technologies.
            </p>
            <span>2023 © SURGE All rights reserved.</span>
        </div>
        <div className='links'>
            <div className='links-item'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Vision</a></li>
                    <li><a href="">Team</a></li>
                </ul>
            </div>
            <div className='links-item'>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twiiter</a></li>
                    <li><a href="">LinkedIn</a></li>
                </ul>
            </div>
            <div className='links-item'>
                <ul>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                </ul>
            </div>
            
            
        </div>
    </div>
  )
}

export default Footer
