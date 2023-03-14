import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ReviewCard({img, author, occupation, content, rating}) {
  return (
    <div>
        <div className="reviews">
                  <img src={ img } alt="" />
                  <div>
                      <span className="author">{ author }</span>
                      <span className="occupation">{ occupation }</span>
                  </div>
                  <p>{ content }</p>
                  <div className='stars'><FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#FFD200"}} /> { rating } </div>
              </div>
    </div>
  )
}
