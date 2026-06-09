import { useEffect, useState } from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import Items from './components/Items'
import Pagination from './components/Pagination'

function App() {
  const [currentItems, setCurrentItems] = useState([]); //фильрация товаров
  const [currentPage, setCurrentPage] = useState(1) //пагинация текущая страница 
  const [itemsPerPage] = useState(5) // кол-во товаров на странице
  const lastCountryIndex = currentPage * itemsPerPage //индекс последней страницы
  const firstCountryIndex = lastCountryIndex - itemsPerPage //индекс первой страницы
  const currentCountry = currentItems.slice(firstCountryIndex, lastCountryIndex) //текущая страница
  const paginate = pageNumber => setCurrentPage(pageNumber) //чтобы страница переключалась
  const [orders, setOrders] = useState([]) //массив для товаров в карзине
  const [items, setItems] = useState([
    {
      id:1,
      title: 'Зайчик',
      img: 'bunny.jpg',
      desc: '100% синтетика',
      category: 'tShirt',
      price: '2999'
    },
     {
      id:2,
      title: 'Lagoda',
      img: 'lagoda.jpg',
      desc: 'Хлопок 94%, полиэстер 6%',
      category: 'tShirt',
      price: '3200'
    },
     {
      id:3,
      title: 'Ren&Stimpy',
      img: 'ren.jpg',
      desc: '94% хлопок 6 п/э',
      category: 'tShirt',
      price: '3400'
    },
     {
      id:4,
      title: 'Bazuka',
      img: 'bazuka.jpg',
      desc: '94% хлопок 6 п/э',
      category: 'tShirt',
      price: '3600'
    },
     {
      id:5,
      title: 'Catsoup',
      img: 'anime.jpg',
      desc: '94% хлопок 6 п/э',
      category: 'tShirt',
      price: '3400'
    },
     {
      id:6,
      title: 'Belial',
      img: 'belial.jpg',
      desc: '92% хлопок 8 п/э',
      category: 'tShirt',
      price: '2600'
    },
     {
      id:7,
      title: 'Mace',
      img: 'mace.jpg',
      desc: '80% хлопок, 20% полиэстер',
      category: 'sweater',
      price: '6900'
    },
     {
      id:8,
      title: 'Fatality',
      img: 'hood.jpg',
      desc: '80% хлопок, 20% п/э',
      category: 'sweater',
      price: '6900'
    },
     {
      id:9,
      title: 'Solve Et Coagula',
      img: 'kruto.jpg',
      desc: '80% хлопок, 20% п/э',
      category: 'sweater',
      price: '4800'
    },
     {
      id:10,
      title: 'Glass',
      img: 'glass.jpg',
      desc: '80% хлопок, 20% полиэстер',
      category: 'sweater',
      price: '6500'
    }
  ])

  useEffect(() =>{
    setCurrentItems(items);
  }, [])

  const chooseCategory = (category) =>{
    setCurrentPage(1); //сброс страницы
    if(category === 'all'){
      setCurrentItems(items);
      return
    }

    setCurrentItems(items.filter(obj => obj.category === category))
  }

  const addToOrders = (item) =>{
    let inInArray = false;
    orders.forEach(el => {
      if(el.id === item.id){
        inInArray = true;
      }
    })
    if(!inInArray){
      setOrders([...orders, item])
    }
  }

  const deleteOrder = (id) => {
    setOrders(orders.filter(el => el.id !== id))
  }

 return(
  <div className='container'>
    <Header orders={orders} onDelete={deleteOrder}/>
    <Categories chooseCategory={chooseCategory}/>
    <Items Items={currentCountry} onAdd={addToOrders}/>
    <Pagination itemsPerPage={itemsPerPage} totalItems={currentItems.length} paginate={paginate} currentPage={currentPage}/>
  </div>
 )
}

export default App
