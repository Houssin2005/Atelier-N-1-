import { phoneList } from '../datas/phoneList'
import PhoneItem from './PhoneItem'
import '../styles/PhoneList.css'

function PhoneList() {
  return (
    <ul className="lmj-phone-list">
      {phoneList.map((phone) => (
        <PhoneItem
          key={phone.id}
          id={phone.id}
          cover={phone.cover}
          name={phone.name}
          price={phone.price}
          battery={phone.battery}
          performance={phone.performance}
          isBestSale={phone.isBestSale}
        />
      ))}
    </ul>
  )
}
export default PhoneList