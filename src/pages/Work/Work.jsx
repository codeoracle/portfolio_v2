import './work.scss'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Projects } from '../../data';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <div className='work'>

    <div className="heroWrap">

    <div className="hero">

        <div className="heroContent">
          <h1 className="title">Hi, I&apos;m Yunus Mustapha, a<span className='stong'> software engineer</span> on a mission to turn ideas into reality</h1>

          <div className="descWrap">

          <div className="desc">
          <ArrowRightIcon className='icon'/>
          <span>With expertise in full-stack
          <span className='point'> Frontend, Backend and DevOps.</span></span>
          </div>

          <div className="desc">
          <ArrowRightIcon className='icon'/>
          <span>I excel in crafting innovative solutions that <span className='point'> inspire, and elevate possibilities.</span></span>
          </div>
          
          <div className="desc">
          <ArrowRightIcon className='icon'/>
          <span>I enhance user experiences through 
          <span className='point'> expertly crafted solutions.</span></span>
          </div>

          </div>
        </div>

        <div className="heroImage">
          <img src="/img/HeroGif.gif" alt="hero" className="heroImg" />
        </div>

      </div>

    </div>

    <div className="projectsContainer">

      <div className="projects">
      <h1 className="projectHeader">Projects</h1>
 
      <div className="projectWrap">
       {Projects.map((project) =>(
          <div className="project" key={project.id}>
            <img src={project.img} alt="project_img" className="proImg" />
            <Link to={project.demo} className="proTitle" target='_blank'>{project.title}</Link>
            <span className="prodesc">{project.desc}</span>
            <div className="buttons">
            <Link to={project.demo} className="link" target='_blank'>LIVE</Link>
            <Link to={project.git} className="link" target='_blank'>CODE</Link>
            </div>
          </div>
       ))}
       </div>
      </div>
    </div>

    </div>
  )
}

export default Work