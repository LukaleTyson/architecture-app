import './maintenance.scss'
import img from "../../../images/reliable.jpg"


const Maintenance = () => {
  return (
    <div className='maintenanceWrapper'>
      <h1>Maintenance services</h1>
      <p> We offer bespoke maintenance packages tailored to the individual needs of each client. Services can include anything from adhoc repairs to contracts that cover all aspects of maintenance.
      </p>
      <p>If you feel that we could be of some assistance, please contact us and we would be happy to discuss your individual requirements.</p>
      <button>Contact Us</button>
      <div className="Gallery">
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
      <div className='info'>
        <div className='left'>
          <p>The expectations of Pune Industries clients are, quite rightly, that the job does not finish when the last tool is put down. Each and every property they work on is handed over in spotless condition, perfectly showcasing their work and their clients’ properties.</p>
          <button>Contact Us</button>
        </div>
        <div className="right">

          <img src={img} alt="" />
        </div>
      </div>
      <div className='info info2'>
        <div className='left'>
          <p>
            Many clients were returning to Pune Industries, asking for help in ensuring their homes and properties remain in perfect condition. We aim to provide the very best in property and related lifestyle services to our clients.
          </p>
          <button>Contact Us</button>
        </div>
        <div className="right">

          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Maintenance