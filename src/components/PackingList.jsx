import React from 'react'
import Item from './Item'

function PackingList({items, onDeleteItem}) {
    // console.log(initialItems)
  return (
    <div className='list'>
         {items.map((item)=> {
            return <Item key={item.id} item={item} onDeleteItem={onDeleteItem}/>
         })}
        
    </div>
  )
}

export default PackingList