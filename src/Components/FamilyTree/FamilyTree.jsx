import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';

export const MoneyContext = createContext('');

const FamilyTree = () => {
    const [money, setMoney] = useState(0);



    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h4>Total Family Money: {money}</h4>

            <MoneyContext.Provider value={[money, setMoney]}>
                <Grandpa></Grandpa>
            </MoneyContext.Provider>


        </div>
    );
};

export default FamilyTree;