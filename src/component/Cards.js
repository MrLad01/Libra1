
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
                    { rating }
                  </div>
                    <button>View details</button>
                </div>
            </div>
          </div>
    </div>
  )
}
