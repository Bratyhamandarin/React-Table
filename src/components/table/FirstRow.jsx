import React from 'react'

export const FirstRow = () => {
    return (
        <li className='table__row'>
          <div className='table__row--art'>Артикул</div>
          <div className='table__row--name'>Название товара</div>
          <div className='table__row--brand'>Бренд</div>
          <div className='table__row--weight'>Вес</div>
          <div className='table__row--quantity'>Фасовка</div>
          <div className='table__row--price'>Цена с учетом персональной скидки</div>
          <div className='table__row--stock'>Наличие</div>
        </li> 
    )
}