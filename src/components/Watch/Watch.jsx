import './Watch.css';
import PropTypes from 'prop-types';

const Watch = ({ watch }) => {
  const { name, brand, price } = watch;

  return (
    <div className="watch-container">
      <h2>{name || 'Unknown Watch'}</h2>
      <p>Brand: {brand || 'Unknown Brand'}</p>
      <p>Price: ${price || 'N/A'}</p>
    </div>
  );
};

Watch.propTypes = {
  watch: PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Watch;
