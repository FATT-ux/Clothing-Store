import React, { useState } from 'react'

export default function Categories({chooseCategory}) {
  const [categories, setCategories] = useState([
    {
      key: 'all',
      name: 'всё'
    },
    {
      key: 'tShirt',
      name: 'Футболки'
    },
    {
      key: 'sweater',
      name: 'Кофты'
    },
  ])
  return (
    <div className='Categories'>
      {categories.map(obj => (
        <div key={obj.key} onClick={() => chooseCategory(obj.key)} className='category'>
          {obj.name}
        </div>
      ))}
    </div>
  )
}
