import './home.scss'
import img1 from '../../images/background-img.jpg'
import img2 from '../../images/reliable.jpg'
import img3 from '../../images/designs.jpg'

const Home = () => {
  return (
    <div className='homeWrapper'>
      <section className='heroSection'>
        <h1>We Build  <br /> The New World</h1>
        <span>Complement Your Lifestyle</span>
        <button>Contact Us</button>
      </section>
      <section className="welcomeSection">
        <h1>WELCOME!</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos distinctio commodi at pariatur doloremque voluptatem quod dicta dignissimos ipsa. Eos possimus optio quasi, quibusdam voluptatum aliquam. Cum deleniti accusantium perspiciatis.</p>
        <div className='titles'>
            <span>Comfortable</span>
            <span>Reliable</span>
            <span>Design</span>
        </div>
      </section>
      <section className="recentProjectsSection">
        <h1>RECENT PROJECTS</h1>
        <div className="images">
          <div>
            <span></span>
            <img src={img1} alt="Project 1" />
          </div>
          <div>
            <span></span>
            <img src={img2}alt="Project 1"  />
          </div>
          <div>
            <span></span>
            <img src={img3}alt="Project 1"  />
          </div>
        </div>
        <button>View More</button>
      </section>
      <section className="othersSay">
        <h1>Others Say</h1>
        <div className='slideContainer'>
          <div className="slideCard">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima alias rerum consequatur, corrupti error dolores veniam dolorum. Optio quos cumque, reiciendis quis porro laborum maxime hic assumenda architecto alias.</p>
            <div className='person'>
              <img src={img1} alt="User" />
              <span>---- Tyson Lukale ----</span>
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Home