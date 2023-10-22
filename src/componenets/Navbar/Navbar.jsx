import './navbar.scss'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

        <div className="navbar">

            <div className="navWrap">

            <div className="logoWrap">
            <NavLink to={'/'} className="logo">ym.</NavLink>
            </div>

      <nav className="navbarList">
        <NavLink to={'/'} className="navbarItem active">Work</NavLink>
        <NavLink to={'/about'} className="navbarItem">About</NavLink>
        <Link to={'https://drive.google.com/file/d/1hWKj1WHv2NjM0YG4YJ7oP4ya4wuaUdNz/view?usp=sharing'} className="navbarItem" target='_blank'>Resume</Link>
      </nav>
            </div>

    </div>

  )
}

export default Navbar