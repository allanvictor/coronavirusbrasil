import React from 'react';  
import '../assets/css/header.css';
import Menu from '../components/Menu';
import PwaButton from '../components/PwaButton';
const Header = (props) => {
  
  return (
    <div className='main-header'>
        <div className="header-content">
          <h1>{ props.title }</h1>          
        </div>
        <Menu />
        <div className="pwabutton"><PwaButton /></div>
    </div>
  );
}

export default Header;