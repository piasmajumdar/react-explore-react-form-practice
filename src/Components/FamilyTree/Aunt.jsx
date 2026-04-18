import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = () => {

    const [money, setMoney] = use(MoneyContext);

    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name={'Tom Tom'}></Cousin>
                <Cousin name={'Jo Jo'}></Cousin>
            </section>
            <button onClick={()=>setMoney(money+5000)}>Add 5000 TK</button>
        </div>
    );
};

export default Aunt;