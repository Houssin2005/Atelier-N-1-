import { phoneList } from '../datas/phoneList'
import PhoneItem from './PhoneItem'
import '../styles/PhoneList.css'

function PhoneList() {
    return (
        <ul className='lmj-phone-list'>
            {phoneList.map(({ id, cover, name, battery, performance }) => (
                <PhoneItem key={id} cover={cover} name={name} battery={battery} performance={performance} />
            ))}
        </ul>
    )
}
export default PhoneList