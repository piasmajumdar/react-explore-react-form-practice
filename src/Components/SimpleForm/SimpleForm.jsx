import React from 'react';

const SimpleForm = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }



    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name='name' placeholder='Your Name' />
                <br />
                <input type="email" name="email" placeholder='Your Email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;