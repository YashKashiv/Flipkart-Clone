import React from 'react';

const Cart = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-semibold mb-4">Your Cart is Empty</h1>
                <p className="text-gray-600">Add items to your cart to see them here.</p>
            </div>
        </div>
    );
};

export default Cart;