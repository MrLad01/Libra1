import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Cards({img, content, author, rating}) {
  return (
    <div>
        <div className="t-book">
            <div className="t-img1">
                <img src={ img } alt="" />
            </div>
            <div className="t-content">
                <h5>{ content }</h5>
                <h6>{ author }</h6>
                <div>
                  <div className="stars">
                     <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#FFD200"}} /> 
                     <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#FFD200"}} /> 
                     <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#FFD200"}} />
                     <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#FFD200"}} />
                  </div>
                    <button>View details</button>
                </div>
            </div>
          </div>
    </div>
  )
}
