import React, { useState } from 'react';

const useInputField = (defaultValue) => {

    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleFieldInputOnChange = (e)=>{
        setFieldValue(e.target.value);
    }
    return [fieldValue, handleFieldInputOnChange];
};

export default useInputField;