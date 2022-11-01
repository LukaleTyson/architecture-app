import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({ imgUrl, text, btnUrl }) => {
    console.log(imgUrl)
  return (
      <div className='cardWrapper'>
          <img src={imgUrl} alt="service" />
          <h2>{text}</h2>
          <Link  className='button' to={btnUrl} >Learn More</Link>
    </div>
  )
}

export default Card