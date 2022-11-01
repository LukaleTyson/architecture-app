import './about.scss'
import cultureImg from '../../images/designs.jpg'

const About = () => {
  return (
    <div className='aboutWrapper'>
      <div className='top'>
        <h1>ABOUT PUNE INDUSTRIES</h1>
        <p>We are a people-orientated, progressive business, driven by our values to deliver lasting change for our stakeholders and the communities we work in.</p>
        <p>
          We are passionate about our role in providing vital buildings and infrastructure across the country, committed to the idea that what we do makes a real difference to people’s lives. Our purpose, vision and values shape our culture, proactively guiding our day-to-day activities and keeping us focused on what's important to us. 
        </p>
      </div>
      <div className="bottom">
        <img src={cultureImg} alt="culture" />
        <div>
          <h2>Our culture</h2>
          <h1>Our purpose is to improve lives through what we do. We start by creating a culture at Pune in which people can thrive</h1>
        </div>
      </div>
    </div>
  )
}

export default About