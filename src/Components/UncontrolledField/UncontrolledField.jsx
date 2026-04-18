import React, { useRef } from 'react';

const UncontrolledField = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} name='name' placeholder='Your Name' />
                <br />
                <input type="email" ref={emailRef} name="email" placeholder='Your Email' />
                <br />
                <input type="password" ref={passRef} name="password" placeholder='Enter your Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;