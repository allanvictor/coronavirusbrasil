import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuItem = styled(Link)`
  font-family: 'Roboto', sans-serif;
  position: relative;
  display: inline-block;
  margin: 15px 0px;
  outline: none;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 13pt;
  height: 2em;
  line-height: 2em;
  overflow: hidden;
  
  :hover, :focus {
    outline: none;
  }

  span {
    text-align: center;
    position: relative;
    display: inline-block;
    transition: 0.3s;
    padding: 0px 10px;
    ${props => props.focus==="true" ?  "transform: translateY(-100%);" : {}}
  }
  span:before {
    position: absolute;
    top: 100%;
    width: 100%;
    left: 0;
    color: #CD4436;
    background-color: #fff;
    content: attr(data-hover);
    font-weight: bold;
  }
  
  :hover span, :focus span {
    transform: translateY(-100%);
  }
   
`;

const Menu = () => {
    
    const [link1,setLink1] = useState(true);
    const [link2,setLink2] = useState(false);
    
    const spanFocus = (e,focus) => {
      if (focus.toString()==="true"){
        console.log("");
      }
      else 
      {
        setLink1(!link1);
        setLink2(!link2);
      }
      
    }

    return (
      <div>
        <ul>
          <li>
            <MenuItem to="/" onClick={e=>spanFocus(e,link1)} focus={link1.toString()}><span data-hover="Brasil">Brasil</span></MenuItem>
          </li>
          <li>
            <MenuItem to="/city" onClick={e=> spanFocus(e,link2)} focus={link2.toString()}><span data-hover="Cidades" >Cidades</span></MenuItem>
          </li>
        </ul>
      </div>
    );
}

export default Menu;