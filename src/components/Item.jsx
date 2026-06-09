import React from 'react'

export default function Item({item, onAdd}) {
  return (
    <div className='item'>
        <h2>{item.title}</h2>
        <img src={`/img/` + item.img} alt="" className='item-img'/>
        <b className='item-price'>{item.price} ₽</b>
        <div className='item-plus' onClick={() => onAdd(item)}>+</div>
    </div>
  )
}
