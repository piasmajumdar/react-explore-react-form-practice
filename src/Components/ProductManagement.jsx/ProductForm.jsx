import React, { useState } from 'react';

const ProductForm = ({ handleAddProducts }) => {
    const [error, setError] = useState('');

    const handleProductSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        if (name.length === 0) {
            setError('Please enter product name')
            return
        }
        else if (price <= 0) {
            setError('Price should be greater than 0')
            return
        }
        else if (quantity < 0) {
            setError('Quantity must be greater than 0')
            return
        }
        else (
            setError('')
        )


        const newProduct = {
            name,
            price,
            quantity
        }
        handleAddProducts(newProduct);
    }

    return (
        <div>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name' />
                <br />
                <input type="number" name='price' placeholder='Product Price' />
                <br />
                <input type="number" name='quantity' placeholder='Product Quantity' />
                <br />
                <input type="submit" value="Submit" />
                <br />

                <p style={{ color: 'red' }}>
                    <small>
                        {error}
                    </small>
                </p>
            </form>
        </div>
    );
};

export default ProductForm;