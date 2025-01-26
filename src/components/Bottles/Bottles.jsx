import { useState, useEffect } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch('/bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    return (
        <div>
            <h2>Bottles: {bottles.length}</h2>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
}

export default Bottles;
