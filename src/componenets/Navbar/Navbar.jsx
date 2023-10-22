import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

        <div className="navbar">

            <div className="navWrap">

            <div className="logoWrap">
            <Link to={'/'} className="logo">ym.</Link>
            </div>

      <nav className="navbarList">
        <Link to={'/'} className="navbarItem active">Work</Link>
        <Link to={'/about'} className="navbarItem">About</Link>
        <Link to={'https://drive.google.com/file/d/1ng6UosumF9XRRxRet1Q3E93F1nc4ZW7h/view?usp=sharing'} className="navbarItem" target='_blank'>Resume</Link>
      </nav>
            </div>

    </div>

  )
}

export default Navbar