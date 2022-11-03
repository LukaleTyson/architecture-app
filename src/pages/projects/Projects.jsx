import './projects.scss'
import img from "../../images/reliable.jpg"

const Projects = () => {
  return (
    <div className='projectsWrapper'>
      <h1>Our Work</h1>
      <div className="gallery">
        <div className='item'>
          <img src={img} alt="" />
          <div className="info">
            <span>Bofa Ocean View</span>
            <span>Kilifi</span>
          </div>
        </div>
        <div className='item'>
          <img src={img} alt="" />
          <div className="info">
            <span>Bofa Ocean View</span>
            <span>Kilifi</span>
          </div>
        </div>
        <div className='item'>
          <img src={img} alt="" />
          <div className="info">
            <span>Bofa Ocean View</span>
            <span>Kilifi</span>
          </div>
        </div>
        <div className='item'>
          <img src={img} alt="" />
          <div className="info">
            <span>Bofa Ocean View</span>
            <span>Kilifi</span>
          </div>
        </div>
        <div className='item'>
          <img src={img} alt="" />
          <div className="info">
            <span>Bofa Ocean View</span>
            <span>Kilifi</span>
          </div>
        </div>
        <div className='item'>
          <img src={img} alt="" />
          <div className="info">
            <span>Bofa Ocean View</span>
            <span>Kilifi</span>
          </div>
        </div>
        <div className='item'>
          <img src={img} alt="" />
          <div className="info">
            <span>Bofa Ocean View</span>
            <span>Kilifi</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects