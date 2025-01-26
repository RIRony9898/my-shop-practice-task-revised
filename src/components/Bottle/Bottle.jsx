import './Bottle.css'
import PropTypes from 'prop-types'


const Bottle = ({bottle,handlePurchase}) => {
    const {name, price, img} = bottle;
  return (
    <div className="bottle">
        <div>
        <img src={img} alt={name}/>
        </div>
        <h3>{name}</h3>
        <p>{price}</p>
        <button onClick={() => handlePurchase(bottle)}>Purchase</button>
    </div>
  )
}

Bottle.propTypes = {
    bottle:PropTypes.object.isRequired,
    handlePurchase:PropTypes.func.isRequired
}

export default Bottle