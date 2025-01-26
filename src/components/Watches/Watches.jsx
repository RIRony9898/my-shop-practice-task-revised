import { useState, useEffect } from 'react';
import Watch from '../Watch/Watch';

const Watches = () => {
    const [watch, setWatch] = useState([]);
    
    useEffect(() => {
        fetch('/watches.json')
            .then(res => res.json())
            .then(data => setWatch(data))
            .catch(err => console.error('Error fetching data:', err));
    }, []);
    
    return (
        <div>
            <h2>Watches: {watch.length}</h2>
            {
                watch.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
            }
        </div>
    );
}

export default Watches;
