import { Link } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <h2 className="footerTitle">Get in touch!</h2>
        <div className="socials">
            <Link to={'mailto:yunusmustapha2@gmail.com'} className="socialLink" target='_blank'>email</Link>
            <Link to={'https://www.linkedin.com/in/mustapha-yunus'} className="socialLink" target='_blank'>linkedin</Link>
            <Link to={'https://github.com/codeoracle'} className="socialLink" target='_blank'>github</Link>
            <Link to={'https://drive.google.com/file/d/1hWKj1WHv2NjM0YG4YJ7oP4ya4wuaUdNz/view?usp=sharing'} className="socialLink" target='_blank'>resume</Link>
        </div>
        <span className="copyRight">
        Created by Yunus Mustapha. 
        </span>
    </div>
  )
}

export default Footer