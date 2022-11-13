import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/styles.css'

const Header = () =>
{
    return (
        <header>
            <h1 className="h1-header">Book Management App</h1>
            <hr />
            <div className="links">
                <NavLink to='/' className='link' activeClassName='active' exact>
                   BOOK LIST
                </NavLink>
                <NavLink to='/add' className='link-add' activeClassName='active'>
                    ADD BOOK
                </NavLink>
            </div>
        </header>
    )
}

export default Header;