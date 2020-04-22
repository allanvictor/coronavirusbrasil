import React from 'react';  
import '../assets/css/header.css';
import Menu from '../components/Menu';
const Header = (props) => {
  
  return (
    <div className='main-header'>
        <div className="header-content">
          <h1>{ props.title }</h1>          
        </div>
        <Menu />
    </div>
  );
}

export default Header;