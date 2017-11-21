import React from 'react'

export const FirstRow = () => {
    return (
        <li className='items-table__row row row_bold'>
          <div className='row__item row__item_sm'>Артикул</div>
          <div className='row__item row__item_lg'>Название товара</div>
          <div className='row__item row__item_sm'>Бренд</div>
          <div className='row__item row__item_sm'>Вес</div>
          <div className='row__item row__item_sm'>Фасовка</div>
          <div className='row__item row__item_md'>Цена с учетом персональной скидки</div>
          <div className='row__item row__item_sm'>Наличие</div>
        </li> 
    )
}