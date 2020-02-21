import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import '.././Style/pizzamenu.scss';
import cart from "../../icons/header_cart.png";
import menu from "../../icons/menu_icon.png";

const Header = () => {
  return (
    <div className="header">
     <header>
        <h3>Margherita</h3> 
    
        <img src={menu} alt="menu_icon" id="menu_icon" />
        <img src={cart} alt="header_cart" id="header_cart" />
        
    </header>
    </div>
  );
}

export default Header;
    
  
  
       