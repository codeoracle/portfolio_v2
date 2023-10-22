import './about.scss'
import DevicesIcon from '@mui/icons-material/Devices';
import BrushIcon from '@mui/icons-material/Brush';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import { Certificates } from '../../data';
import { Link } from 'react-router-dom';



const About = () => {

  
  return (
    <div className='about'>

      <div className="aboutWrap">
      <div className="aboutContent">
        <h1 className="aboutTitle">Hi there, I&apos;m <span className='stong'> Yunus Mustapha!</span></h1>
        <span className="aboutDesc">I am a software developer based in Nigeria. My passion for software development started in May 2020 when I began building Wordpress websites.
Since then, I have been constantly advancing and expanding my knowledge in this field. I felt the urge to dive deeper into software development which led me to learn how to code in  javascript. With each project, I strive to create a unique and effective solution while integrating the latest software technologies.
Thank you for taking the time to visit my portfolio!</span>
      </div>
      <img src="/img/MyAvatar.png" alt="" className="aboutImg" />
      </div>

     <div className="skills">

      <div className="skillWrap">

      <div className="expertise">
        <div className="titleWrap">
        <BrushIcon className='icon'/><span className="title">Soft Skills</span>
        </div>
        <div className="lists">
          
          <span>Problem Solving
          <span className='point'> Ability to analyze complex problems and devise effective solutions.</span></span>

          <span>Creativity <span className='point'> Thinking creatively to design innovative software solutions.</span></span>
    
          <span>Teamwork
          <span className='point'> Collaborating effectively with cross-functional teams.</span></span>
        

          <span>Adaptability
          <span className='point'> Willingness to learn new technologies and adapt to changing environments.</span></span>


        </div>
      </div>

      <div className="expertise">
        <div className="titleWrap">
        <DevicesIcon className='icon'/><span className="title">Areas of Expertises</span>
        </div>
        <div className="lists">

          <span>Software Development
          <span className='point'> ReactJS, NodeJS, ExpressJS, NextJS, TypeScript, Tailwind and SAAS.</span></span>

          <span>Database Management <span className='point'> MySQL, MongoDB and PostgreSQL.</span></span>

          <span>Testing and Debugging
          <span className='point'> Writing unit tests and debugging code to ensure reliability and functionality.</span></span>

          <span>Agile and Scrum
          <span className='point'> Using Scrum methodologies for project management.</span></span>
          </div>

        </div>

      </div>


      </div>

      <div className="certificatesWrap">
        <div className="titleWrap">
      <CardMembershipIcon className='icon'/>
      <h2 className="certTitle">Certificates</h2>
        </div>
        <div className="certWrap">
          {Certificates.map((Certificate) =>(
            <div className="cert" key={Certificate.id}>
              <img src={Certificate.img} alt={Certificate.title} className="certImg" />
              <Link to={Certificate.link} className='link' target='_blank'>{Certificate.title}</Link>
            </div>
          ))}
        </div>
      </div>

      </div>

  )
}

export default About