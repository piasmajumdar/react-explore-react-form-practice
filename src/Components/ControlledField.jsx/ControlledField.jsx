import React, { useState } from 'react';

const ControlledField = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(password)

    }

    const handleNameOnChange = (e) => {
        // console.log(e.target.value)
        const newName = e.target.value;
        setName(newName);
    }

    const handleEmailOnChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordOnChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)

        if (password.length < 6) {
            setError('Password must be 6 or longer')
        } else {
            setError('')
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' defaultValue={name} onChange={handleNameOnChange} placeholder='Your Name' />
                <br />
                <input type="email" name="email" defaultValue={email} onChange={handleEmailOnChange} placeholder='Your Email' />
                <br />
                <input type="password" name="password" defaultValue={password} onChange={handlePasswordOnChange} placeholder='Enter your password' />
                <br />
                <input type="submit" value="Submit" />

                <p style={{ color: 'red' }}>
                    <small>{error}</small>
                </p>
            </form>
        </div>
    );
};

export default ControlledField;