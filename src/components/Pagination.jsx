import React from 'react'


export default function Pagination({itemsPerPage, totalItems, paginate, currentPage}) {
    const pageNumbers = [];
    for (let i=1; i <= Math.ceil(totalItems/itemsPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <div>
        <ul className='pagination'>
            {
                pageNumbers.map(number => (
                    <li className={`page-item ${currentPage === number ? 'active' : null}`} key={number}>
                        <a href="#" className='page-link' onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
