import React from 'react'
import Item from './Item'
export default function Items({Items, onAdd}) {
  return (
    <main>
        {Items.map(obj =>(
            <Item key={obj.id} item={obj} onAdd={onAdd}/>
        ))}
    </main>
  )
}
