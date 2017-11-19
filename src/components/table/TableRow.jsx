import React from 'react'

export const TableRow = (props) => {
    return (
    <li className='table__row'>
        <div className='table__row--art'>{props.artnumber}</div>
        <div className='table__row--name'>{props.name}</div>
        <div className='table__row--brand'>{props.brand}</div>
        <div className='table__row--weight'>{props.weight}</div>
        <div className='table__row--quantity'>{props.quantity}</div>
        <div className='table__row--price'>{props.price}</div>
        <div className='table__row--stock'>{props.stock}</div>
    </li>
    )
}