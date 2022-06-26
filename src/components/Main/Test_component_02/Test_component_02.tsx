import React, {ChangeEvent, useState} from 'react';
import { v1 } from 'uuid';

type NameArrType = {
    id: string
    name: string
}

export const TestComponent02 = () => {

    const [nameArr, setNameArr] = useState<Array<NameArrType>>([])
    const [valueName, setValueName] = useState<string>('')

    const oChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValueName(e.currentTarget.value)

    return (
        <div>
            <input value={valueName} onChange={oChangeHandler}/>
            <button>New name</button>
            <ul>
                {nameArr.map(el => <li>{el.name}</li>)}
            </ul>

        </div>
    );
};
