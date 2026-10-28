import '../styles/PhoneItem.css'
import RatingScale from './RatingScale'

function PhoneItem({ id, cover, name, price, battery, performance, isBestSale }) {
  return (
    <li className="lmj-plant-item">
      {isBestSale && <span className="best-badge">BEST SELLER 🔥</span>}
      <div className="img-wrapper">
        <img src={cover} alt={name} className="lmj-plant-item-cover" />
      </div>

      <div className="phone-name">{name}</div>
      <div className="price">{price} MAD</div>

      <div className="ratings-vertical">
       <RatingScale ratingType="battery" scaleValue={battery} phoneName={name} />
       <RatingScale ratingType="performance" scaleValue={performance} phoneName={name} />
      </div>
    </li>
  )
}
export default PhoneItem