import React, {useState} from 'react';

type NameArrType = {
    id: string
    name: string
}

export const TestComponent02 = () => {

    const [nameArr, setNameArr] = useState<Array<NameArrType>>([])
    return (
        <div>
            <input/>
            <button>New name</button>
        </div>
    );
};
