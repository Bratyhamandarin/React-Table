import React from 'react'
import { TableRow, FirstRow } from './'

export const Table = (props) => {
    return (
        <ul className='items-table'>
            <FirstRow/>
            {props.food.map( (item, index) => 
                <TableRow
                    key = {index}
                    {...item}
                />
            )}
      </ul>
    )
}