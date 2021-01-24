import React, { useContext } from 'react';
import { CountContext } from '../provider/CountProvider';

const Controller = () => {
    const { increment, decrement, reset } = useContext(CountContext);
    return (
        <div>
            <button type="button" onClick={() => increment()}>Increment</button>
            <button type="button" onClick={() => decrement()}>Decrement</button>
            <button type="button" onClick={() => reset()}>Reset</button>
        </div>
    )
}

export default Controller;
