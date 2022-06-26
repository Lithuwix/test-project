import React, {ChangeEvent, useState} from 'react';
import { v1 } from 'uuid';

type NameArrType = {
    id: string
    name: string
}

export const TestComponent02 = () => {

    const [nameArr, setNameArr] = useState<Array<NameArrType>>([])
    const [valueName, setValueName] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValueName(e.currentTarget.value)

    const onClickHandler = () => {
        setNameArr([{id: v1(), name: valueName}, ...nameArr])
        setValueName('')
    }



    return (
        <div>
            <input value={valueName} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>New name</button>
            <ul>
                {nameArr.map(el => <li>{el.name}</li>)}
            </ul>

        </div>
    );
};
