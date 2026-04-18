import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name={'Anik'}></Cousin>
                <Cousin name={'DJ Sonik'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;