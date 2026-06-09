import React, { useState, useEffect } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order';
export default function Header({orders, onDelete}) {
    const [cartOpen, setCartOpen] = useState(false);
    const [summa, setSumma] = useState(0)

    const addSumme = () =>{
        let total = 0;
        orders.forEach(el => total += Number.parseFloat(el.price)) //перебераем весь массив и добавляем к переменной все ценны из бд/ и т д
        setSumma(total);
    }

    useEffect(() =>{ //пересчитываем сумму при каждом изменении orders
        addSumme();
    }, [orders]) //зависимость от orders

  return (
    <header className='header'>
        <div className="header-container">
            <div className='logo'>
                <img src='/img/_.jpeg' alt="Логотип" className='header-logo'/>
            </div>

            <nav className='header-nav'>
                <ul className="header-list">
                    <FaShoppingBasket className={`basket ${cartOpen ? 'active' : ''}`} onClick={() => setCartOpen(!cartOpen)}/>
                        {cartOpen ? (
                            <div className='shop-cart'>
                                {orders.map(el => (
                                    <Order key={el.id} item={el} onDelete={onDelete}/>
                                ))}
                                <p className='summa'>Итоговая сумма: {new Intl.NumberFormat().format(summa)} Руб</p>
                            </div>
                        ) : null}
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
            </nav>
            
        </div>
        <div className="presentation"></div>

    </header>
  )
}
