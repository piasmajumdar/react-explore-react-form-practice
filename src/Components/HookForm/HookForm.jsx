import React from 'react';
import useInputField from '../../Hook/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(password)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' defaultValue={name} onChange={nameOnChange} placeholder='Your Name' />
                <br />
                <input type="email" name="email" defaultValue={email} onChange={emailOnChange} placeholder='Your Email' />
                <br />
                <input type="password" name="password" defaultValue={password} onChange={passwordOnChange} placeholder='Enter Password' />
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;