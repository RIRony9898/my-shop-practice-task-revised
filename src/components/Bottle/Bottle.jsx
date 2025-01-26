import './Bottle.css'

const Bottle = ({bottle}) => {
    const {name, price, img} = bottle;
  return (
    <div>
        <div>
        <img src={img} alt={name}/>
        </div>
        <h3>{name}</h3>
        <p>{price}</p>
    </div>
  )
}

export default Bottle