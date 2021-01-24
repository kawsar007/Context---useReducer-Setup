import React, { useContext } from 'react';
import { CountContext } from '../provider/CountProvider';
import Controller from './Controller';

function CountComponent() {
    const { count } = useContext(CountContext)
    return (
        <div>
            This Count Number is: {count}
            <Controller/>
        </div>
    )
}

export default CountComponent
