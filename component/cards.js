
export default function cards({img, content, author}) {
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
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                    <button>View details</button>
                </div>
            </div>
          </div>
    </div>
  )
}
