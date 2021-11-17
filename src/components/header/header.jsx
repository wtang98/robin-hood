import React from 'react'
import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://raw.githubusercontent.com/CleverProgrammers/robinhood-clone/69f8244e276928c04fffbd3324ee21c6c82d28e6/src/robinhood.svg" alt="" />
            </div>
            <div className="header__search">
                <div className="header__search-container">
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="header__menuItems">
                <a href="#">Free Stocks</a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>

            
        </div>
    )
}

export default Header
