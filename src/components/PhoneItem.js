import '../styles/PhoneItem.css'
import RatingScale from './RatingScale'

function PhoneItem({ cover, name, battery, performance }) {
    return (
        <li className='lmj-phone-item'>
            <img className='lmj-phone-item-cover' src={cover} alt={name} />
            {name}
            <div>
                <RatingScale careType='battery' scaleValue={battery} />
                <RatingScale careType='performance' scaleValue={performance} />
            </div>
        </li>
    )
}
export default PhoneItem