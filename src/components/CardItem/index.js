import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <div className="div-container">
      <li className={`card ${className}`}>
        <h1 className="card-heading">{title}</h1>
        <p className="card-paragraph">{description}</p>
        <div className="img-card">
          <img src={imgUrl} className="image-card" alt={title} />
        </div>
      </li>
    </div>
  )
}

export default CardItem
