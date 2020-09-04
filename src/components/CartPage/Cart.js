import React from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default function Cart() {
    return (
        <div>
            <CartColumns/>
            <CartList/>
            <CartTotal/>
            
        </div>
    )
}
