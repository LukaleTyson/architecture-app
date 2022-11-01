import './development.scss'
import img from "../../../images/reliable.jpg"
import { HiChevronDoubleRight } from "react-icons/hi2"

const Development = () => {
  return (
    <div className='dvlptWrapper'>
      <h1>Refurbishment & Development</h1>
      <p> Pune Industries can offer a full range of services to fulfil requirements for a project, ranging from:</p>
      <div className="dvlptServices">
        <span>
          <HiChevronDoubleRight className='iconRight' />
          Architectural Design
        </span>
        <span>
          <HiChevronDoubleRight className='iconRight' />
          Project Management
        </span>
        <span>
          <HiChevronDoubleRight className='iconRight' />
          Construction
        </span>
        <span>
          <HiChevronDoubleRight className='iconRight' />
          Interior Finishing
        </span>
        <span>
          <HiChevronDoubleRight className='iconRight' />
          Ongoing Maintenance
        </span>
      </div>
      <div className="Gallery">
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
      <div className='info'>
        <div className='left'>
          <h2>We Specialise in...</h2>
          <p>all aspects of property refurbishment from demolitions and structural work through to impeccably finished joinery, marble, cornicing, flooring, specialist finishes and decorations.</p>
        </div> 
        <div className="right">

          <img src={img} alt="" />
        </div>
      </div>
      <div className='info info2'>
        <div className='left'>
          <p>We work with the best interior designers and architects in the industry and also have an enviable client list, with many of our customers returning in the future for additional services, which is testament to the relationships we have built over the years..</p>
          <p>Please browse through our projects which pays homage to some of the beautiful homes we have created.</p>
        </div>
        <div className="right">

        <img  src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Development