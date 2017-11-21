import React from 'react'

export const TableRow = (props) => {
    return (
    <li className='items-table__row row filter_pointer'>
        <div className='row__item row__item_sm'>{props.artnumber}</div>
        <div className='row__item row__item_lg'>{props.name}</div>
        <div className='row__item row__item_sm'>{props.brand}</div>
        <div className='row__item row__item_sm'>{props.weight} кг</div>
        <div className='row__item row__item_sm'>{props.quantity} шт</div>
        <div className='row__item row__item_md'>{props.price} рублей</div>
        <div className='row__item row__item_sm'>{props.stock === 1? 'есть' : 'нету'}</div>
    </li>
    )
}