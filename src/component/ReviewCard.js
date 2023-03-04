
export default function ReviewCard({img, author, occupation, content}) {
  return (
    <div>
        <div className="reviews">
                  <img src={ img } alt="" />
                  <div>
                      <span className="author">{ author }</span>
                      <span className="occupation">{ occupation }</span>
                  </div>
                  <p>{ content }</p>
                  <i></i>
              </div>
    </div>
  )
}
