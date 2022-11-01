import Card from '../../components/card/Card'
import './services.scss'
import img from "../../images/designs.jpg"

const Services = () => {
  return (
    <div className='servicesWrapper'>
      <h1>Our Services</h1>
      <p>Choosing Pune Industries Company guarantees an impressive end product that will satisfy for years to come.</p>
      <div className='section1'>
        <Card imgUrl={img} text="Refurbishment & Development" btnUrl='/services/development' />
        <Card imgUrl={img} text="Maintenance Services" btnUrl='/services/maintenance' />
      </div>
    </div>
  )
}

export default Services