import React from 'react'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss'

const Header = () => {
  return (
    <header className='d-flex justify-content-between header__container'>
        <div className='logo'><Link to='/'>Game of Thrones</Link></div>
        <nav className='d-flex nav__bar'>
            <div><Link to='/characters/'>Characters</Link></div>
            <div><Link to='/houses/'>Houses</Link></div>
            <div><Link to='/books/'>Books</Link></div>
        </nav>
    </header>
  )
}

export default Header